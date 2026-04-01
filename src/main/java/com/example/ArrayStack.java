package com.example;

import java.util.EmptyStackException;

public class ArrayStack<T> implements Stack<T> {

    private static final int INITIAL_CAPACITY = 10;
    private T[] backingArray;
    private int size;

    public ArrayStack() {
        backingArray = (T[]) new Object[INITIAL_CAPACITY];
    }

    @Override
    public void push(T item) {
        if (size == backingArray.length) {
            resize();
        }
        backingArray[size++] = item;
    }

    @Override
    public T pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        T item = backingArray[--size];
        backingArray[size] = null;
        return item;
    }

    @Override
    public T peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return backingArray[size - 1];
    }

    @Override
    public boolean isEmpty() {
        return size == 0;
    }

    @Override
    public int size() {
        return size;
    }

    private void resize() {
        T[] newArray = (T[]) new Object[backingArray.length * 2];
        System.arraycopy(backingArray, 0, newArray, 0, backingArray.length);
        backingArray = newArray;
    }
}
