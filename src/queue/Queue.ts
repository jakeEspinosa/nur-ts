export interface Queue<T> {
  add(item: T): void;
}

export class Queue<T> {
  private _items: T[];
  private _left: number = 0;
  private _right: number = 0;
  private _size: number = 0;

  constructor(size: number = 16) {
    this._items = Array(size);
  }

  /**
   * Adds item to the end of the queue.
   *
   * @param item item to be enqueued
   */
  add(item: T): void {
    if (this.size === this._items.length) {
      throw new Error("Queue is full");
    }

    this._items[this._right] = item;
    this._right = (this._right + 1) % this._items.length;
    this._size++;
  }

  get size() {
    return this._size;
  }
}
