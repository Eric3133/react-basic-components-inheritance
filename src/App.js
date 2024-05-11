import './App.css';
import { createContext, useContext, useState } from 'react';

const MsgContext = createContext();
// app -> Son
function Son (props) {
  console.log(props);
  return <div>{props.name}, JSX: {props.child}</div>
}
// App -> Son2
function Son2 (props) {
  console.log(props.children);
  return <div>This is {props.children}</div>
}
// Son3 -> App
function Son3 ({funMsg}) {
  <div>this is Son 3</div>
  const msg = "This is John";
  return <button onClick={() => funMsg(msg)}>send</button>
}

function Son4 ({onGetAName}) {
  const name = 'this is Son4 name'
  return (
    <div>
      <div>this is Son 4</div>
      <button onClick={() => onGetAName(name)}>send</button>
    </div>
)
}

function Son5 (props) {
  return (
  <div>
    <div>this is Son 5</div>
    <div>{props.name}</div>
  </div>
  )

}

function Son6 () {
  return (
    <div>
      <div>this is Son 6</div>
      <Son7 />
    </div>
  )
}

function Son7 () {
  const name = useContext(MsgContext);
  return (
    <div>
      <div>this is Son 7, {name}</div>
    </div>
  )
}

function App() {
  const name = "This is Son msg";
  const [msg, setmsg] = useState('');
  const getMsg = (msg) => {
    setmsg(msg);
  };

  const [data, setDat] = useState('');
  const getAName = (name) => {
    console.log(name)
    setDat(name);}
  return (
    <div className="App">
      <h1>My First React App , {msg}</h1>
      <p>Welcome to my first React app!</p>
      <Son3
        name = {name}
        age = {25}
        isMarried = {false}
        list = {[1, 2, 3]}
        obj = {{name: "John", age: 25}}
        func = {() => console.log("Hello")}
        child = {<span>this is react</span>}
        funMsg = {getMsg}
      />
      <Son2>
        <h1>Children</h1>
      </Son2>
      <Son4 onGetAName={getAName} />
      <Son5 name = {data}/>
      <MsgContext.Provider value={name}>
        <Son6 />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
