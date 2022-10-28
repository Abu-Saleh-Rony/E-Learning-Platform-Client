import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is react js?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is JSX?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
                </p>
              </div>
            </details>
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Can web browsers read JSX directly?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object
                  For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object.
                </p>
              </div>
            </details>
          </div>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is the virtual DOM?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do you create a React app?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  These are the steps for creating a React app:
                  1. Install NodeJS on the computer because we need npm to install the React library. Npm is the node package manager that contains many JavaScript libraries, including React.
                  2. Install the create-react-app package using the command prompt or terminal.
                  3. Install a text editor of your choice, like VS Code or Sublime Text.
                </p>
              </div>
            </details>
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is an event in React?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.
                  <strong> (A) </strong> React events are named using camelCase, rather than lowercase in HTML.
                  <strong> (B) </strong> With JSX, you pass a function as the event handler, rather than a string in HTML.

                </p>
              </div>
            </details>
          </div>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What are forms in React?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  React employs forms to enable users to interact with web applications is given below: <br />
                  1. Using forms, users can interact with the application and enter the required information whenever needed. Form contain certain elements, such as text fields, buttons, checkboxes, radio buttons etc. <br />
                  2. Forms are used for many different tasks such as user authentication, searching, filtering, indexing, etc

                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What are the components in React?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.

                  There are two types of components in React:
                  1. <strong>Functional Components:</strong> These types of components have no state of their own and only contain render methods, and therefore are also called stateless components. They may derive data from other components as props (properties). <br />
                  2. <strong>Class Components:</strong> These types of components can hold and manage their own state and have a separate render method to return JSX on the screen. They are also called Stateful components as they can have a state.

                </p>
              </div>
            </details>
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is Redux?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Redux is an open-source, JavaScript library used to manage the application state. React uses Redux to build the user interface. It is a predictable state container for JavaScript applications and is used for the entire application’s state management.
                </p>
              </div>
            </details>
          </div>
        </div >
      </section >
    </div >
  );
};

export default Faq;
