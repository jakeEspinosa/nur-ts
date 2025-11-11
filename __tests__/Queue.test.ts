import { describe, expect, it } from "@jest/globals";
import { Queue } from "../src/queue/Queue.ts"

describe("Queue", () => {
  describe("constructor", () => {
    it("should be size 0 when empty", () => {
      const q: Queue<number> = new Queue();

      expect(q.size).toEqual(0);
    });
  });

  describe("add", () => {
    it("should be size 1 when an item is added", () => {
      const q: Queue<number> = new Queue();

      expect(q.size).toEqual(0);
      q.add(2);
      expect(q.size).toEqual(1);
    });

    it("should return true when an item is successfully added", () => {
      const q: Queue<number> = new Queue();

      expect(q.add(1)).toEqual(true);
    });

    it("should throw when full and add is called", () => {
      const q: Queue<number> = new Queue(1);

      q.add(2);

      expect(() => {
        q.add(3);
      }).toThrow("Queue is full");
    });
  });

  describe("offer", () => {
    it("should be size 1 when an item is offered", () => {
      const q: Queue<number> = new Queue();

      expect(q.size).toEqual(0);
      q.offer(2);
      expect(q.size).toEqual(1);
    });

    it("should return true when an item is successfully offered", () => {
      const q: Queue<number> = new Queue();

      expect(q.offer(1)).toEqual(true);
    });

    it("should return false when full and offer is called", () => {
      const q: Queue<number> = new Queue(1);

      q.offer(2);

      expect(q.offer(3)).toEqual(false);
    });
  })

  describe("remove", () => {
    it("should return the head when remove is called", () => {
      const q: Queue<number> = new Queue(1);

      const item = 4;
      q.add(item);

      expect(q.remove()).toEqual(item);
    })

    it("should be size 0 when an existing item is removed", () => {
      const q: Queue<number> = new Queue(2);

      q.add(1);
      q.remove();
      expect(q.size === 0).toEqual(true);
    });

    it("should throw when remove is called on an empty queue", () => {
      const q: Queue<number> = new Queue(1);

      expect(() => {
        q.remove()
      }).toThrow("Queue is empty");
    });

    it("should throw when 2 items are added but 3 are removed", () => {
      const q: Queue<number> = new Queue(4);

      const items: number[] = [1, 2];
      items.forEach((item) => {
        q.add(item);
      });

      q.remove();
      q.remove();

      expect(() => {
        q.remove()
      }).toThrow("Queue is empty");
    });
  })
});
