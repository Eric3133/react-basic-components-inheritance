import './App.css';
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

function App() {
  const name = "This is John";
  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>Welcome to my first React app!</p>
      <Son
        name = {name}
        age = {25}
        isMarried = {false}
        list = {[1, 2, 3]}
        obj = {{name: "John", age: 25}}
        func = {() => console.log("Hello")}
        child = {<span>this is react</span>}
      />
      <Son2>
        <h1>Children</h1>
      </Son2>
    </div>
  );
}

export default App;
