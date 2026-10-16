import { describe, expect, it } from "vitest";
import { CONTACT, EXPERIENCE, PROJECTS } from "@/lib/portfolio-data";

describe("Portfolio facts", () => {
  it("uses the supplied email", () => expect(CONTACT.email).toBe("kneezkhan12@gmail.com"));
  it("uses the supplied phone", () => expect(CONTACT.phone).toBe("03316443907"));
  it("uses the supplied GitHub", () => expect(CONTACT.github).toBe("https://github.com/kneez-khan"));
  it("does not invent a LinkedIn profile", () => expect(CONTACT.linkedin).toBe(""));
  it("keeps the internship at one month", () => expect(EXPERIENCE.find(e => e.role === "UI/UX Designer Intern")?.duration).toBe("1 Month"));
  it("excludes the unverified combined result", () => {
    const thesis = PROJECTS.find(p => p.id === "violence");
    expect(thesis?.metrics).toEqual([{ label: "YOLO Accuracy", value: "94.1%" }, { label: "Transformer", value: "81.17%" }]);
  });
  it("preserves all six actual projects", () => expect(PROJECTS.map(p => p.id)).toEqual(["lahore", "churn", "phone", "retail", "violence", "weapon"]));
});