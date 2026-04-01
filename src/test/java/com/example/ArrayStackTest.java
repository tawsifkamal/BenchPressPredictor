package com.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.EmptyStackException;

import static org.junit.jupiter.api.Assertions.*;

class ArrayStackTest {

    private Stack<String> stack;

    @BeforeEach
    void setUp() {
        stack = new ArrayStack<>();
    }

    @Test
    @DisplayName("A new stack should be empty")
    void newStackIsEmpty() {
        assertTrue(stack.isEmpty());
        assertEquals(0, stack.size());
    }

    @Test
    @DisplayName("Pushing an item should make the stack not empty")
    void pushMakesStackNotEmpty() {
        stack.push("hello");
        assertFalse(stack.isEmpty());
        assertEquals(1, stack.size());
    }

    @Test
    @DisplayName("Pushing and peeking an item")
    void pushAndPeek() {
        stack.push("world");
        assertEquals("world", stack.peek());
    }

    @Test
    @DisplayName("Pushing and popping an item")
    void pushAndPop() {
        stack.push("test");
        assertEquals("test", stack.pop());
        assertTrue(stack.isEmpty());
        assertEquals(0, stack.size());
    }

    @Test
    @DisplayName("Popping from an empty stack should throw EmptyStackException")
    void popOnEmptyStack() {
        assertThrows(EmptyStackException.class, () -> stack.pop());
    }

    @Test
    @DisplayName("Peeking from an empty stack should throw EmptyStackException")
    void peekOnEmptyStack() {
        assertThrows(EmptyStackException.class, () -> stack.peek());
    }

    @Test
    @DisplayName("Stack should resize when full")
    void stackResizes() {
        for (int i = 0; i < 15; i++) {
            stack.push("item " + i);
        }
        assertEquals(15, stack.size());
        assertEquals("item 14", stack.pop());
        assertEquals(14, stack.size());
    }

    @Test
    @DisplayName("Complex push and pop scenario")
    void complexPushPop() {
        stack.push("one");
        stack.push("two");
        assertEquals("two", stack.pop());
        stack.push("three");
        assertEquals(2, stack.size());
        assertEquals("three", stack.peek());
        assertEquals("three", stack.pop());
        assertEquals("one", stack.pop());
        assertTrue(stack.isEmpty());
    }
}
