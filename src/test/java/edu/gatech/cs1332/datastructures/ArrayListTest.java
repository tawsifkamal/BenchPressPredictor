package edu.gatech.cs1332.datastructures;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

/**
 * This is a basic set of unit tests for your ArrayList.
 *
 * @author Your Name
 * @version 1.0
 */
public class ArrayListTest {

    private ArrayList<String> list;

    @Before
    public void setUp() {
        list = new ArrayList<>();
    }

    @Test(timeout = 200)
    public void testInitialization() {
        assertEquals(0, list.size());
        assertArrayEquals(new Object[ArrayList.INITIAL_CAPACITY], list.getBackingArray());
    }
}
