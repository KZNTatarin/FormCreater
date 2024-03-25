import { useState, useEffect } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./App.css";

import Content from "./components/Content";
import DrawerLayout from "./components/DrawerLayout";
import MyButton from "./UI/Button/MyButton";

import {useFormStore} from "./store/store";

function App() {
  // main state
  const { updateOpen, updateDrawerType, open, dates, cleanDates } = useFormStore();

  // handlers
  const showDrawer = (drawerType) => {
    updateOpen(true);
    updateDrawerType(drawerType);
  };

  const deleteDates = () => {
    cleanDates();
  };

  // code state
  const [codeString, setCodeString] = useState("");

  useEffect(() => {
    const formElement = document.getElementById("created-form");

    if (formElement) {
      setCodeString(formElement.outerHTML);
    }
  }, [dates.length]);

  return (
    <div style={{ maxWidth: "1400px", padding: "10px 15px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: " space-evenly",
          marginBottom: "10px",
        }}
      >
        <Content />

        <aside>
          <MyButton onClick={() => showDrawer("inputs")}>Инпуты</MyButton>

          <MyButton onClick={() => showDrawer("textarea")}>
            Текстовое поле
          </MyButton>

          <MyButton onClick={() => showDrawer("questionnaire")}>
            Опросник
          </MyButton>

          <MyButton onClick={() => deleteDates()}>
            Удалить
          </MyButton>
        </aside>
      </div>

      <DrawerLayout />

      <SyntaxHighlighter
        showLineNumbers
        language="html"
        style={atomOneDark}
        customStyle={{
          display: "content",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default App;
