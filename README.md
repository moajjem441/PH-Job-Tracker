1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
getElementByid---->we can find anything by thier own id.here no need to use '#' before id.
getElementsByClassName--->we can find out a element by it's className .its return a HTMLCollection.
querySelector---->we can get any element by their id ,class or tag name.
querySelectorAll--->it will return a NodeList if we want to find out any element by their className ,id .Also we need to add [] <-- this for index if we wanna specific element.


2. How do you create and insert a new element into the DOM?
Ans:
const container=document.getElementById('container');
const div =document.createElement("div");
container.append(div);


3. What is Event Bubbling? And how does it work?
Ans:
Event Bubbling is how a event go from document down to target.
It works three with steps:
i.Capturing phase-->go to find out the target from up to down.
ii.Target-->get the target.
iii.Bubbling Phase-->come up from bottom after got the target


4.What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event Delegation is to put event on a parent instead of many event listener on child element.
Faster ,Cleaner,Easy to manage, reduce the code.



5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault()-->it stops the browser default action for that event.
stopPropagation()--->it stops the event from bubbling up to parent .


