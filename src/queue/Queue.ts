export interface Queue<T> {
  add(item: T): void;
}

/**
 * Aims to follow the Java 8 Collections API.
 */
export class Queue<T> {
  private _items: T[];
  private _left: number = 0;
  private _right: number = 0;
  private _size: number = 0;

  constructor(size: number = 16) {
    this._items = Array(size);
  }

  /**
   * Inserts the specified item into this queue if it is possible to do so
   * immediately without violating capacity restrictions, returning true upon
   * success and throwing an error if no space is currently
   * available.
   *
   * @param item the item to add
   * @returns true
   */
  add(item: T): boolean {
    if (this._size === this._items.length) {
      throw new Error("Queue is full");
    }

    this._items[this._right] = item;
    this._right = (this._right + 1) % this._items.length;
    this._size++;
    return true;
  }

  /**
   * Inserts the specified item into this queue if it is possible to do so
   * immediately without violating capacity restrictions. This method is
   * generally preferable to add(item), which can fail to insert an item
   * only by throwing an error.
   *
   * @param item the item to add
   * @returns true if the item was added to this queue, else false
   */
  offer(item: T): boolean {
    if (this._size === this._items.length) {
      return false;
    }

    this._items[this._right] = item;
    this._right = (this._right + 1) % this._items.length;
    this._size++;
    return true;
  }

  /**
   * Retrieves and removes the head of this queue. This method differs from
   * poll only in that it throws an exception if this queue is empty.
   *
   * @returns the head of the queue
   */
  remove(): T {
    if (this._size === 0) {
      throw new Error("Queue is empty");
    }

    this._left++;
    this._size--;
    return this._items.pop()!;
  }

  /**
   * Retrieves and removes the head of this queue, or returns null if this queue is empty.
   *
   * @returns the head of this queue, or null if this queue is empty
   */
  poll(): T | null {
    if (this._size === 0) {
      return null;
    }

    this._left++;
    this._size--;
    return this._items.pop()!;
  }

  /**
   * Retrieves, but does not remove, the head of this queue. This method
   * differs from peek only in that it throws an exception if this queue
   * is empty.
   *
   * @returns the head of this queue
   */
  element(): T {
    if (this._size === 0) {
      throw new Error("Queue is empty");
    }

    return this._items[this._left]!;
  }

  /**
   * Retrieves, but does not remove, the head of this queue, or returns null if
   * this queue is empty.
   *
   * @returns the head of this queue, or null if this queue is empty
   */
  peek(): T | null {
    if (this._size === 0) {
      return null;
    }

    return this._items[this._left]!;
  }

  get size() {
    return this._size;
  }
}
