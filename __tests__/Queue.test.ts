import { describe, expect, it } from "@jest/globals";
import { Queue } from "../src/queue/Queue.ts"

describe("Queue", () => {
  it("should be size 0 when empty", () => {
    const q: Queue<number> = new Queue();

    expect(q.size).toEqual(0);
  });

  it("should be size 1 when an item is added", () => {
    const q: Queue<number> = new Queue();

    expect(q.size).toEqual(0);
    q.add(2);
    expect(q.size).toEqual(1);
  });

  it("should throw when full add is called", () => {
    const q: Queue<number> = new Queue(1);

    q.add(2);

    expect(() => {
      q.add(3);
    }).toThrow("Queue is full");
  });
});
