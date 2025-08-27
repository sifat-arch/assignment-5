Answer the following questions clearly:
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2.How do you create and insert a new element into the DOM?
3.What is Event Bubbling and how does it work?
4.What is Event Delegation in JavaScript? Why is it useful?
5.What is the difference between preventDefault() and stopPropagation() methods?

<!-- answers -->

answer-1:
getElementById is a DOM method that selects a specific element from an HTML document using its unique id.

getElementsByClassName is a DOM method that selects all elements from an HTML document with a given class name. It returns an HTMLCollection.

querySelector is a DOM method that selects an element from an HTML document using a CSS selector (such as id, class, or tag). If multiple elements match, it selects only the first one.

querySelectorAll is a DOM method that uses CSS selectors to select all matching elements from an HTML document and returns them as a NodeList.

answer-2:
First, create a new HTML element using document.createElement().
Then, add the necessary content inside the element using element.innerHTML, innerText, or textContent.

Next, select the parent element where you want to insert the new element using document.getElementById().

Finally, insert the new element into the parent using appendChild().

answer-3
Event bubbling is a process in the DOM where, when an event occurs on an element, it first happens on that element and then gradually propagates step by step to its parent element, grandparent, and finally up to the document.

example:

<div>
    <ul>
        <li>Click</li>
    </ul>
</div>

When you click on the <li> element:

The click event will first trigger on the li element.

Then it will bubble up to the ul element.

Next, it will propagate to the div element.

After that, it will go to the html element and finally to the document.

the event starts from the target element and propagates step by step up to the root.

answer-4
Event delegation is a technique where a single event listener is added to a parent element, and events occurring on its child elements are handled through that listener.

it is useful because

1. If there are many child elements, instead of adding a separate listener to each one, adding a single listener to the parent uses less memory and improves performance.
2. If new child elements are dynamically added to the DOM, you don’t need to add separate listeners; the parent listener will automatically work for the new elements as well.
3. The code becomes much simpler and more maintainable.once a listener is added to the parent, it can handle events for all child elements.

answer-5

difference between preventDefault() and stopPropagation() methods:

preventDefault() : Prevents the default action of the event from happening. It prevents the default behavior of an event.It stops the browser's default behavior.

stopPropagation():stopPropagation() is a DOM event method that prevents an event from bubbling or capturing through the DOM tree.It
Prevents the event from reaching parent or ancestor elements
