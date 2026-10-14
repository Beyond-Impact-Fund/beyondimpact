import { describe, expect, it } from "vitest";
import { getInsight } from "@/content/insights";

describe("Theresa's biotechnology article", () => {
  const article = getInsight("why-biotechnology-is-the-only-long-term-plan-humanity-has-left");

  it("attributes the article to Theresa in her scientific expert role", () => {
    expect(article?.author).toBe("Theresa Rothenbücher");
    expect(article?.authorRole).toBe("Scientific Expert, Beyond Impact");
    expect(article?.authorImage).toMatch(/theresa-rothenbuecher\.png$/);
  });

  it("retains a linked source and open license for the biotechnology photo", () => {
    const photo = article?.body.find((block) => block.type === "img");
    expect(photo?.type === "img" ? photo.credit?.url : undefined).toBe("https://commons.wikimedia.org/wiki/File:Bior%C3%A9acteur_CiYOU.png");
    expect(photo?.type === "img" ? photo.credit?.licenseUrl : undefined).toBe("https://creativecommons.org/licenses/by-sa/4.0/");
  });
});