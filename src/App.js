import { useState } from "react";
import Btn from "./components/button";
import Input from "./components/input";
import * as m from "mathjs";

function App() {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const addText = (value) => {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (
        text.length === 0 ||
        (text.length > 0 &&
          !["+", "-", "*", "/"].includes(text[text.length - 1]))
      ) {
        setText((text) => [...text, value]);
      }
    } else {
      setText((text) => [...text, value]);
    }
  };

  const deletefunk = () => {
    setText((text) => text.slice(0, -1));
  };
  const getResult = () => {
    try {
      const input = text.join("");
      setResult(m.evaluate(input));
    } catch (error) {
      setResult("Hata");
    }
  };

  const getReset = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="BtnParent">
        <Input result={result} text={text} />
        <Btn simvol={"7"} clikFunk={addText} />
        <Btn simvol={"8"} clikFunk={addText} />
        <Btn simvol={"9"} clikFunk={addText} />
        <Btn simvol={"/"} clikFunk={addText} stil={"operator"} />
        <Btn simvol={"4"} clikFunk={addText} />
        <Btn simvol={"5"} clikFunk={addText} />
        <Btn simvol={"6"} clikFunk={addText} />
        <Btn simvol={"*"} clikFunk={addText} stil={"operator"} />
        <Btn simvol={"1"} clikFunk={addText} />
        <Btn simvol={"2"} clikFunk={addText} />
        <Btn simvol={"3"} clikFunk={addText} />
        <Btn simvol={"-"} clikFunk={addText} stil={"operator"} />
        <Btn simvol={"0"} clikFunk={addText} />
        <Btn simvol={"."} clikFunk={addText} />
        <Btn simvol={"="} clikFunk={getResult} />
        <Btn simvol={"+"} clikFunk={addText} stil={"operator"} />
        <Btn simvol={"clear"} stil={"clear"} clikFunk={getReset} />
        <Btn simvol={"delete"} stil={"clear"} clikFunk={deletefunk} />
      </div>
    </div>
  );
}

export default App;
