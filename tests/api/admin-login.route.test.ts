import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  isAdminConfiguredMock: vi.fn(),
  verifyAdminPasswordMock: vi.fn(),
  createAdminSessionTokenMock: vi.fn(),
  consumeRateSlotMock: vi.fn(),
  cookieSetMock: vi.fn(),
}));

vi.mock("next/headers", () => ({
  cookies: async () => ({
    set: mocks.cookieSetMock,
  }),
}));

vi.mock("@/lib/admin-auth", () => ({
  ADMIN_SESSION_COOKIE: "admin_session",
  isAdminConfigured: mocks.isAdminConfiguredMock,
  verifyAdminPassword: mocks.verifyAdminPasswordMock,
  createAdminSessionToken: mocks.createAdminSessionTokenMock,
}));

vi.mock("@/lib/rate-limit", async (importOriginal) => {
  const mod = (await importOriginal()) as object;
  return {
    ...mod,
    consumeRateSlot: mocks.consumeRateSlotMock,
  };
});

describe("POST /api/admin/login", () => {
  beforeEach(() => {
    mocks.isAdminConfiguredMock.mockReset();
    mocks.verifyAdminPasswordMock.mockReset();
    mocks.createAdminSessionTokenMock.mockReset();
    mocks.consumeRateSlotMock.mockReset();
    mocks.cookieSetMock.mockReset();
  });

  it("returns 429 when rate limited", async () => {
    const { RateLimitedError } = await import("@/lib/rate-limit");
    mocks.isAdminConfiguredMock.mockReturnValue(true);
    mocks.consumeRateSlotMock.mockRejectedValueOnce(new RateLimitedError());
    const { POST } = await import("@/app/api/admin/login/route");
    const res = await POST(
      new Request("http://localhost/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ password: "pw" }),
      }),
    );
    expect(res.status).toBe(429);
  });

  it("returns 200 and sets cookie for valid credentials", async () => {
    mocks.isAdminConfiguredMock.mockReturnValue(true);
    mocks.verifyAdminPasswordMock.mockReturnValue(true);
    mocks.createAdminSessionTokenMock.mockReturnValue("token");

    const { POST } = await import("@/app/api/admin/login/route");
    const res = await POST(
      new Request("http://localhost/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ password: "pw" }),
      }),
    );
    expect(res.status).toBe(200);
    expect(mocks.cookieSetMock).toHaveBeenCalledTimes(1);
  });
});
