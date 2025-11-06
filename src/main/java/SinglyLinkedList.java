/**
 * A singly linked list implementation.
 *
 * @param <T> the type of data stored in the list
 */
public class SinglyLinkedList<T> {

    private Node<T> head;
    private int size;

    /**
     * A node in the linked list.
     *
     * @param <T> the type of data stored in the node
     */
    private static class Node<T> {
        private T data;
        private Node<T> next;

        /**
         * Constructs a new node with the given data.
         *
         * @param data the data to store in the node
         */
        public Node(T data) {
            this.data = data;
        }
    }

    /**
     * Adds a new element to the front of the list.
     *
     * @param data the data to add
     */
    public void addFirst(T data) {
        Node<T> newNode = new Node<>(data);
        newNode.next = head;
        head = newNode;
        size++;
    }

    /**
     * Adds a new element to the end of the list.
     *
     * @param data the data to add
     */
    public void addLast(T data) {
        if (head == null) {
            head = new Node<>(data);
        } else {
            Node<T> current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new Node<>(data);
        }
        size++;
    }

    /**
     * Removes and returns the first element from the list.
     *
     * @return the first element, or null if the list is empty
     */
    public T removeFirst() {
        if (head == null) {
            return null;
        }
        T data = head.data;
        head = head.next;
        size--;
        return data;
    }

    /**
     * Returns the number of elements in the list.
     *
     * @return the size of the list
     */
    public int size() {
        return size;
    }

    /**
     * Returns true if the list is empty, false otherwise.
     *
     * @return true if the list is empty
     */
    public boolean isEmpty() {
        return size == 0;
    }
}
