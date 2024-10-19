import "./App.css";
import React, {useState} from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import * as math from "mathjs";
const App = () =>
{
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const addtotext = (val) =>
  {
      setText((text)=> [...text,val +""]);
  };
  const DEL= () =>
  {
    setText("");
    setResult("");
  };
   
  const answer = () =>
  {
     const input = text.join("");
     setResult(math.evaluate(input));
  };
  return(
    
    <div class="app">
    <div class="wrapper">
    <Input text = {text} result={result}/>
    <div class="row">
    <Button symbol={7} handleClick={addtotext}/>
    <Button symbol={8} handleClick={addtotext}/>
    <Button symbol={9} handleClick={addtotext}/> 
    <Button symbol={"/"} color={"black"} handleClick={addtotext}/>

    </div>
    <div class="row">
    <Button symbol={4} handleClick={addtotext}/>
    <Button symbol={5} handleClick={addtotext}/>
    <Button symbol={6} handleClick={addtotext}/>
    <Button symbol={"*"} color={"black"}handleClick={addtotext}/>
    </div>
    <div class="row">
    <Button symbol={1} handleClick={addtotext}/>
    <Button symbol={2} handleClick={addtotext}/>
    <Button symbol={3} handleClick={addtotext}/>
    <Button symbol={"+"} color={"black"} handleClick={addtotext}/>
    </div>
    <div class="row">
    <Button symbol={0}  handleClick={addtotext}/>
    <Button symbol={"."} handleClick={addtotext}/>
    <Button symbol={"="} handleClick={answer}/>
    <Button symbol={"-"} color={"black"} handleClick={addtotext}/>
   
    </div>
    <Button symbol={"DEL"} color={"black"} handleClick={DEL}/>
    </div>
    </div>
  );
};
export default App;      