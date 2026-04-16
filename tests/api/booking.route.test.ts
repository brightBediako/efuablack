import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  createBookingMock: vi.fn(),
  assertRecaptchaTokenMock: vi.fn(),
  consumeRateSlotMock: vi.fn(),
}));

vi.mock("@/services/bookingService", () => ({
  createBooking: mocks.createBookingMock,
}));

vi.mock("@/lib/recaptcha", async (importOriginal) => {
  const mod = (await importOriginal()) as object;
  return {
    ...mod,
    assertRecaptchaToken: mocks.assertRecaptchaTokenMock,
  };
});

vi.mock("@/lib/rate-limit", async (importOriginal) => {
  const mod = (await importOriginal()) as object;
  return {
    ...mod,
    consumeRateSlot: mocks.consumeRateSlotMock,
  };
});

describe("POST /api/booking", () => {
  beforeEach(() => {
    mocks.createBookingMock.mockReset();
    mocks.assertRecaptchaTokenMock.mockReset();
    mocks.consumeRateSlotMock.mockReset();
  });

  it("returns 400 for invalid payload", async () => {
    const { POST } = await import("@/app/api/booking/route");
    const res = await POST(new Request("http://localhost/api/booking", { method: "POST", body: "{}" }));
    expect(res.status).toBe(400);
  });

  it("returns 201 for valid payload", async () => {
    const { POST } = await import("@/app/api/booking/route");
    const body = {
      name: "Test User",
      org: "Church",
      email: "user@example.com",
      phone: "+233123456789",
      eventType: "Worship Night",
      date: "2026-10-12",
      location: "Takoradi",
      message: "We would love to invite you to minister with our team.",
      website: "",
    };
    const res = await POST(
      new Request("http://localhost/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }),
    );
    expect(res.status).toBe(201);
    expect(mocks.createBookingMock).toHaveBeenCalledTimes(1);
  });

  it("returns 429 when rate limited", async () => {
    const { RateLimitedError } = await import("@/lib/rate-limit");
    mocks.consumeRateSlotMock.mockRejectedValueOnce(new RateLimitedError());
    const { POST } = await import("@/app/api/booking/route");
    const body = {
      name: "Test User",
      org: "Church",
      email: "user@example.com",
      phone: "+233123456789",
      eventType: "Worship Night",
      date: "2026-10-12",
      location: "Takoradi",
      message: "We would love to invite you to minister with our team.",
      website: "",
    };
    const res = await POST(
      new Request("http://localhost/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }),
    );
    expect(res.status).toBe(429);
  });
});
