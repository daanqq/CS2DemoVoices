import { describe, expect, it } from "vitest";
import { generateResultString } from "./utils";

describe("generateResultString", () => {
  it("should return empty string when no numbers are found", () => {
    expect(generateResultString("no players here")).toBe("");
    expect(generateResultString("")).toBe("");
    expect(generateResultString("Hello World")).toBe("");
  });

  it("should handle single positive integer", () => {
    expect(generateResultString("player 1")).toBe("tv_listen_voice_indices 1");
    expect(generateResultString("number 2")).toBe("tv_listen_voice_indices 2");
    expect(generateResultString("index 3")).toBe("tv_listen_voice_indices 4");
  });

  it("should handle multiple positive integers", () => {
    expect(generateResultString("players 1 and 2")).toBe("tv_listen_voice_indices 3");
    expect(generateResultString("1, 2, 3")).toBe("tv_listen_voice_indices 7");
    expect(generateResultString("2 4 6")).toBe("tv_listen_voice_indices 42");
  });

  it("should handle large numbers", () => {
    expect(generateResultString("10")).toBe("tv_listen_voice_indices 512");
    expect(generateResultString("15")).toBe("tv_listen_voice_indices 16384");
  });

  it("should extract numbers from complex strings", () => {
    expect(generateResultString("The players are: 1, 3, and 5")).toBe("tv_listen_voice_indices 21");
    expect(generateResultString("Voice indices [2][4][6]")).toBe("tv_listen_voice_indices 42");
  });

  it("should handle duplicate numbers", () => {
    expect(generateResultString("1, 1, 2, 2")).toBe("tv_listen_voice_indices 6");
    expect(generateResultString("3, 3, 3")).toBe("tv_listen_voice_indices 12");
  });

  it("should verify mathematical calculation: sum of 2^(n-1)", () => {
    // For input [1, 2, 3], it should be 2^(1-1) + 2^(2-1) + 2^(3-1) = 1 + 2 + 4 = 7
    expect(generateResultString("1 2 3")).toBe("tv_listen_voice_indices 7");

    // For input [2, 4], it should be 2^(2-1) + 2^(4-1) = 2 + 8 = 10
    expect(generateResultString("2 4")).toBe("tv_listen_voice_indices 10");
  });
});
