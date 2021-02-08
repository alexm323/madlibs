### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a library created by facebook for Javascript that strives to answer the question of HOW to write js code and how to organize it. React allows us to break code into components that we can use to make robust single page applications. 

- What is Babel?
babel transforms syntax so that we can write javascript code in html using jsx sort of like how we used jinja in flask

- What is JSX?
it is a way of writing valid javascript/html hybrid code for react. it serves a similar purpose to jinja from flask
- How is a Component created in React?
A component is a small section of an overall react app that we render on to the page. We import react and we can pass in properties(props) into our code to change the outcome of the overall component. We usually return anything of a component wrapped in a div or <> </> fragments. Components can inherit props and methods from their parent components and can utlize all of the react features and is the main way we break up our code in react. 

- What are some difference between state and props?
props are immutable and should not be changed, state keeps track of a value and can be set using a setter function. we usually destructure out the current 'state' and the function which can be used to change it. the state activates a rerender. 
- What does "downward data flow" refer to in React?
It is the general idea that data should only flow in one direction so we can track errors if and where they occur. 

- What is a controlled component?
Controlled components use callback functions to update changes on a component. Something like a form with an onSubmit callback is an example of a controlled component. You can still update state but you have to use the callbacks like onClick

- What is an uncontrolled component?
uncontrolled components are components where we have to use refs to access the values and should be used sparingly according to the react docs 

- What is the purpose of the `key` prop when rendering a list of components?
a key is like a unique identifier for a component, sort of like an id, but if you are generating components adjacent to each other they should have unique keys as props in their data
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
array indices can change if the array changes 
- Describe useEffect.  What use cases is it used for in React components?
These should be used when we are expecting a sideeffect to occur in an app, like if we make an api call and render something new on the page. The second param of useEffect is an array of dependencies which tell the component when to rerender , such as if you want to limit it to only when a certain state change occurs or you can use an empty array to tell it to only load on the initial render

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef makes it so that we can keep a value in the key of .current as a mutable value in that object which persists even when the component rerenders like when the state changes 
- When would you use a ref? When wouldn't you use one?
use ref when you need something to persist through multiple renders like a timer or counter component that changes the title of the web page. you should avoid using it to just grab dom elements 
- What is a custom hook in React? When would you want to write one?
custom hooks are a way of refactoring code so that you DRY it up. You should never sit down with the intention to write custom hooks until they are necessary. I have been told that custom hooks are not needed but nice to have if you want to refactor code. 