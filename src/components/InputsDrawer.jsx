import { useState } from "react";
import { Radio } from "antd";
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

import {useFormStore} from "../store/store";

export default function InputDrawerLayout() {
  const { updateOpen, updateDates } = useFormStore();

    const [inputName, setInputName] = useState("");
    const [inputPlaceholder, setInputPlaceholder] = useState("");
    const [inputType, setInputType] = useState("text");

  const onClose = () => {
    setInputName('')
    setInputPlaceholder('')
    setInputType('')

    updateOpen(false);
  };

  function createInput(type, label, placeholder) {
    const createElement = {
      element: type,
      label: label,
      type: type,
      placeholder: placeholder,
    };

    updateDates(createElement);
    onClose();
  }

  return (
    <div>
      <Radio.Group
      defaultValue='text'
      style={{marginBottom: '15px'}}
        onChange={(e) => setInputType(e.target.value)}
        buttonStyle="solid"
      >
        <Radio.Button value="text">Текст</Radio.Button>
        <Radio.Button value="tel">Телефон</Radio.Button>
        <Radio.Button value="password">Пароль</Radio.Button>
        <Radio.Button value="email">Почта</Radio.Button>
      </Radio.Group>{" "}
      <br />
      <label>Название строки*</label> <br />
      <MyInput type='text' value={inputName} onChange={(e) => setInputName(e.target.value)} />
      <br />
      <label>Название Holder</label> <br />
      <MyInput
      style={{marginBottom: '10px'}}
        disabled={inputType === "email"}
        value={inputPlaceholder}
        onChange={(e) => setInputPlaceholder(e.target.value)}
      />
      <br />
      <MyButton
        disabled={inputType === ""}
        onClick={() => {
          inputName.trim() === ""
            ? alert("Заполните все обязательные поля")
            : createInput(inputType, inputName, inputPlaceholder);
        }}
      >
        Создать
      </MyButton>
    </div>
  );
}
