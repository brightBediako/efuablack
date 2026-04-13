import { beforeEach, describe, expect, it, vi } from "vitest";

const createContactMock = vi.fn();
const assertRecaptchaTokenMock = vi.fn();
const consumeRateSlotMock = vi.fn();

vi.mock("@/services/contactService", () => ({
  createContact: createContactMock,
}));

vi.mock("@/lib/recaptcha", async (importOriginal) => {
  const mod = (await importOriginal()) as object;
  return {
    ...mod,
    assertRecaptchaToken: assertRecaptchaTokenMock,
  };
});

vi.mock("@/lib/rate-limit", async (importOriginal) => {
  const mod = (await importOriginal()) as object;
  return {
    ...mod,
    consumeRateSlot: consumeRateSlotMock,
  };
});

describe("POST /api/contact", () => {
  beforeEach(() => {
    createContactMock.mockReset();
    assertRecaptchaTokenMock.mockReset();
    consumeRateSlotMock.mockReset();
  });

  it("returns 400 for invalid payload", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const res = await POST(new Request("http://localhost/api/contact", { method: "POST", body: "{}" }));
    expect(res.status).toBe(400);
  });

  it("returns 201 for valid payload", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const body = {
      name: "Test User",
      email: "user@example.com",
      phone: "+233123456789",
      subject: "General inquiry",
      message: "Please share details for your upcoming ministry events.",
      company: "",
    };
    const res = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }),
    );
    expect(res.status).toBe(201);
    expect(createContactMock).toHaveBeenCalledTimes(1);
  });
});
