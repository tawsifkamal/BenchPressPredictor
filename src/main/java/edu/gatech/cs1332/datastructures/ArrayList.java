package edu.gatech.cs1332.datastructures;

/**
 * Your implementation of an ArrayList.
 *
 * @author Your Name
 * @version 1.0
 * @param <T> The type of data stored in the list.
 */
public class ArrayList<T> {

    /**
     * The initial capacity of the ArrayList.
     */
    public static final int INITIAL_CAPACITY = 9;

    /*
     * The backing array for the list.
     */
    private T[] backingArray;

    /*
     * The size of the list.
     */
    private int size;

    /**
     * Constructs a new ArrayList.
     */
    public ArrayList() {
        backingArray = (T[]) new Object[INITIAL_CAPACITY];
        size = 0;
    }

    /**
     * Adds the element to the specified index.
     *
     * @param index The index at which to add the new element.
     * @param data  The data to add.
     * @throws java.lang.IndexOutOfBoundsException if index < 0 or index > size.
     * @throws java.lang.IllegalArgumentException  if data is null.
     */
    public void addAtIndex(int index, T data) {
        // TODO: Implement this method.
    }

    /**
     * Adds the element to the front of the list.
     *
     * @param data The data to add to the front of the list.
     * @throws java.lang.IllegalArgumentException if data is null.
     */
    public void addToFront(T data) {
        // TODO: Implement this method.
    }

    /**
     * Adds the element to the back of the list.
     *
     * @param data The data to add to the back of the list.
     * @throws java.lang.IllegalArgumentException if data is null.
     */
    public void addToBack(T data) {
        // TODO: Implement this method.
    }

    /**
     * Removes and returns the element at the specified index.
     *
     * @param index The index of the element to remove.
     * @return The data formerly located at the specified index.
     * @throws java.lang.IndexOutOfBoundsException if index < 0 or index >= size.
     */
    public T removeAtIndex(int index) {
        // TODO: Implement this method.
        return null;
    }

    /**
     * Removes and returns the first element of the list.
     *
     * @return The data formerly located at the front of the list.
     * @throws java.util.NoSuchElementException if the list is empty.
     */
    public T removeFromFront() {
        // TODO: Implement this method.
        return null;
    }

    /**
     * Removes and returns the last element of the list.
     *
     * @return The data formerly located at the back of the list.
     * @throws java.util.NoSuchElementException if the list is empty.
     */
    public T removeFromBack() {
        // TODO: Implement this method.
        return null;
    }

    /**
     * Returns the element at the specified index.
     *
     * @param index The index of the element to get.
     * @return The data stored at the index.
     * @throws java.lang.IndexOutOfBoundsException if index < 0 or index >= size.
     */
    public T get(int index) {
        // TODO: Implement this method.
        return null;
    }

    /**
     * Returns whether or not the list is empty.
     *
     * @return true if empty, false otherwise.
     */
    public boolean isEmpty() {
        // TODO: Implement this method.
        return true;
    }

    /**
     * Clears the list.
     */
    public void clear() {
        // TODO: Implement this method.
    }

    /**
     * Returns the backing array of the list.
     *
     * @return The backing array of the list.
     */
    public T[] getBackingArray() {
        // DO NOT MODIFY.
        return backingArray;
    }

    /**
     * Returns the size of the list.
     *
     * @return The size of the list.
     */
    public int size() {
        // DO NOT MODIFY.
        return size;
    }
}
