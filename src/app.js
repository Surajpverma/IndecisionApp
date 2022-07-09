// console.log("HAA BHAI KAAM KAR RHA H");
// const getFirstName = (x) => x.split(" ");
// console.log(getFirstName("KAVYA GOEL"));



// let ct=0;
// let subtract=()=>{
    //     ct--;
    //     // console.log("1 subtracted",ct);
//     Reander();
// }
// let reset = () =>{
    //     ct=0;
    //     console.log("reset kar diyo sa");
    //     Reander(); 
    // }
    
    // // console.log(template);
    // const appRoot = document.getElementById("app");
    
    
    // let Reander=() => {
        //     let template = (
            //     <div>
            //     <h1>Count: {ct}</h1>
//     <button onClick= {subtract}>-1
//     </button>
//     <button onClick={reset}>reset</button></div>
// );
// ReactDOM.render(template,appRoot);
//     }
//     Reander();



/*
let app = {
    options: [],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }
}
let randNum=()=>{
    let ranNum=Math.floor(Math.random()*app.options.length);
    let selected=app.options[ranNum];
    alert(selected);
    console.log(ranNum);
};
const onFormSubmit=(e)=>{
    e.preventDefault();
    let option = e.target.elements.option.value;
    
    
    // console.log("Form Submitted");
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        Render(); 
    }
};
let appRoot= document.getElementById("app");

let Render=() =>{
    let template = (
    <div><h1>Functioning check karaan haan Bhaiji</h1>
    <p>{app.options.length}</p>
    <button disabled={app.options.length ==0} onClick={randNum}>Akkadd bakkd</button>
    <form onSubmit={onFormSubmit}><input type="Text" name="option"/>
    <button>Add This</button>
    <ol>{
        app.options.map((options)=>{
            return <li key={options}>{options}</li>;
        })
    }</ol>
    </form></div>
);
ReactDOM.render(template,appRoot);
}
Render();
*/




/*let app ={
    list: []

};

const formSubmit = (e)=>{
    e.preventDefault();
    let input=e.target.elements.input.value;
    
    if(input){
        app.list.push(input);
        e.target.elements.input.value = '';
        Render();
    }
};

let randNum=()=>{
    let ranNum=Math.floor(Math.random() * app.list.length);
    let selected=app.list[ranNum];
    alert(selected);
};

let Render=()=>{
    let template=(
        <div>
        <h1>who is best?</h1>
        <form onSubmit={formSubmit}>
        <div><input type="Text" name="input" /></div>
        <br></br>
        <button>Add this</button>
        <ol>{
            app.list.map((list)=>{
                return <li key="list">{list}</li>
            })
        }
        </ol><div><button onClick={randNum}>Akkadd Bakkad</button></div><br></br>
        </form>
        </div>
    )
    ReactDOM.render(template, document.getElementById("app"));
};
Render();
*/





/* class person{
    // constructor(name="undefined"); we can use this method or give below for default value
    constructor(name="Anonymus", age="0"){
        this.name=name;
        this.age=age;
    }
    get(){
        return `${this.name} is ${this.age} years old.`
    }
};
class student extends person{
    constructor(name,age,stream){
        super(name,age);
        this.stream=stream;
    }
    get(){
        let desc=super.get();
        if(this.stream){
            desc+=` has stream ${this.stream}`;
        }
        return desc;
    }
};
class traveler extends student{
    constructor(name,age,stream,place){
        super(name,age,stream);
        this.place=place;
    }
    get(){
        let desc=super.get();
        if(this.place){
            desc += `hi i am ${this.name} and my college is in ${this.place}.`
        }
        return desc;
    }
};
const me= new traveler("Surajpal Verma", "18", "Software Engg.","Pilani");
console.log(me.get());

const she= new traveler("Vagisha Rana", "19", "IAS","Delhi");
console.log(she.get());
*/



/*let visiblity=false;
let show=()=>{
    visiblity=!visiblity;
    Render();
}
let Render=() =>{
    let template=(
        <div>
        <h1>To check visiblity</h1>
        <button onClick={show}>{visiblity ? "Chhupa le": "Dikha Na"}</button>
        <p>{visiblity ? "Le kar le jasoosi":" "}</p>
        </div>
    )
    ReactDOM.render(template, document.getElementById("app"));
}
Render();
*/




/*
class Header extends React.Component {
    render(){
       return <p>LeDecision </p>;
    }
}
class Action extends React.Component{
    render(){
        return (<div>
         <h2>Apne Decision mujhe sounp do baalak</h2>
         <button>Choo Manter</button>
        </div>);
    }
}
class Option extends React.Component{
    render(){
        return (<div>Option Avavilable </div>);
    }
}
class AddOption extends React.Component{
    render(){
        return (<div>
        <input type="text" />
        <button>Add Option</button></div>);
    }
}
const jsx=(
    <div>
    <h1>Title</h1>
    <Header />
    <Action />
    <Option />
    <AddOption />
    </div>
)
ReactDOM.render(jsx, document.getElementById("app"));
*/



// class Counter extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleAddOne= this.handleAddOne.bind(this);
//         this.handleMinusOne= this.handleMinusOne.bind(this);
//         this.handleReset= this.handleReset.bind(this);
//         this.state= {
//             count: 0
//         }
//     }  
//     handleAddOne(){
//         this.setState((prevState)=>{
//             return {
//               count: prevState.count + 1
//             }
            
//         })
//     }
//     handleMinusOne(){
//         this.setState((prevState)=>{
//             return {
//                 count: prevState.count -1
//             }
//         })
//     }
//     handleReset(){
//         this.setState(()=>{
//             return {
//                 count: 0
//             }
//         })
//     }
//     render(){
//         return (
//             <div>
//               <h1>Count: {this.state.count}</h1>
//               <button onClick={this.handleAddOne}>+1</button>
//               <button onClick={this.handleMinusOne}>-1</button>
//               <button onClick={this.handleReset}>reset</button>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Counter />,document.getElementById("app"));




/*
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            visibility: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    };
    handleToggleVisibility(){

        this.setState((prevState)=>{
            return {
            visibility: ! prevState.visibility
        }})
    };
    render(){
        return (
            <div>
            <h1>"visibility project"</h1>
              <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "hide" : "show"}</button>
            </div>
        )
    };
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
*/

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

  