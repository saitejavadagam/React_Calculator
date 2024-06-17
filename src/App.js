
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import { useState } from 'react';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button'
import {evaluate} from 'mathjs';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {

  const [result,setResult] = useState("0");

  const handleClick = (e)=>{
    const value = e.target.innerText;
    setResult(result==="0"?value:result+value)
  }

  const compute = (e)=>{
      setResult(evaluate(result.replace('x','*')))
  }

  const clear = ()=>{
    setResult("0")
  }

  return (
    <Wrapper>
      <Screen value={result}/>
      <ButtonBox>
        {btnValues.flat().map((btn,i)=>(
         <Button
         key={i}
         className={btn ==='='?"equals":"button"}
         value={btn}
         onClick={btn==='='?compute:btn==='C'?clear:handleClick}
         />
        ))}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
