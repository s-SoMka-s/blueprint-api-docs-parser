export interface Iterator<T> {
    current(): T;
    next(): T | null;
    hasNext(): boolean;
}
