// import './utils.js';

// import add,{ sq } from './utils.js'

// console.log('app.js is running!!!!');
// console.log(sq(8));
// console.log(add(20,30))

// import { isAdult, canDrink } from "./person";
// console.log(isAdult(21),canDrink(11));
import React from 'react';
import ReactDOM from 'react-dOM';
import IndecisionApp from './componenets/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


// const template= React.createElement('p',{}, 'testing 123');

// const template = <p>This is pta nhi kya</p>;
// ReactDOM.render(template, document.getElementById('app'));

// IndecisionApp.defaultProps = {
//     options: []
//   };
  

 
const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.content}
      <p>Footer</p>
    </div>
  );
};
 
const Template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
);



  
  // const User = (props) => {
  //   return (
  //     <div>
  //       <p>Name: {props.name}</p>
  //       <p>Age: {props.age}</p>
  //     </div>
  //   );
  // };
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  
    // class OldSyntax {
    //   constructor() {
    //     this.name = 'mike';
    //     this.getGreeting = this.getGreeting.bind(this);
    //   }
    //   getGreeting(){
    //     return `Hi, My Name is ${this.name}.`
    //   }
    // }
    // const oldSyntax = new OldSyntax();
    // const getGreeting = oldSyntax.getGreeting;
    // console.log(oldSyntax.getGreeting());
   
   
   
    // class NewSyntax {
    //    name = 'Jen';
    //    getGreeting = ()=>{
    //     return `Hi, My Name is ${this.name}.`
    //    }
    // }
    // const newSyntax = new NewSyntax();
    // const newGetGreeting = newSyntax.getGreeting;
    // console.log(newGetGreeting);