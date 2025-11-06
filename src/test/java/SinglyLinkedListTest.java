import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class SinglyLinkedListTest {

    private SinglyLinkedList<String> list;

    @BeforeEach
    public void setUp() {
        list = new SinglyLinkedList<>();
    }

    @Test
    public void testAddFirst() {
        list.addFirst("a");
        assertEquals(1, list.size());
        assertEquals("a", list.removeFirst());
        assertTrue(list.isEmpty());
    }

    @Test
    public void testAddLast() {
        list.addLast("a");
        list.addLast("b");
        assertEquals(2, list.size());
        assertEquals("a", list.removeFirst());
        assertEquals("b", list.removeFirst());
        assertTrue(list.isEmpty());
    }

    @Test
    public void testRemoveFirst() {
        list.addFirst("a");
        list.addFirst("b");
        assertEquals("b", list.removeFirst());
        assertEquals("a", list.removeFirst());
        assertNull(list.removeFirst());
    }

    @Test
    public void testSize() {
        assertEquals(0, list.size());
        list.addFirst("a");
        assertEquals(1, list.size());
        list.addLast("b");
        assertEquals(2, list.size());
        list.removeFirst();
        assertEquals(1, list.size());
    }

    @Test
    public void testIsEmpty() {
        assertTrue(list.isEmpty());
        list.addFirst("a");
        assertFalse(list.isEmpty());
        list.removeFirst();
        assertTrue(list.isEmpty());
    }
}
