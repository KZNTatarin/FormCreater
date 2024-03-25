import { Drawer } from "antd";
import { useState } from "react";
import MyInput from "../UI/Input/MyInput.jsx";
import MyButton from "../UI/Button/MyButton.jsx";

import {useFormStore} from "../store/store";

export default function TextareaDrawer() {
    const [textareaNameInput, setTextareaNameInput] = useState('')
    const [shortNameInput, setShortNameInput] = useState('')
    const [placeholderInput, setPlaceholderInput] = useState('')
    const [maxLengthInput, setMaxLengthInput] = useState(0)

    const { updateOpen, updateDates } = useFormStore();

  const onClose = () => {
    setTextareaNameInput('')
    setShortNameInput('')
    setPlaceholderInput('')
    setMaxLengthInput(0)
    
    updateOpen(false);
  };

  function createTextarea(label, shortname, placeholder, maxlength) {
    const createElement = {
        element: "textarea",
          label: label,
          shortName: shortname,
          placeholder: placeholder,
          maxlength: maxlength,
      };
      
      updateDates(createElement);
      onClose();
    }

  return (
    <div >
        <label >Название поля*</label> <br/>
      <MyInput onChange={(e) => setTextareaNameInput(e.target.value)}  value={textareaNameInput} /> <br/>
      <label >Короткое название на английском* (для кода)</label> <br/>
      <MyInput onChange={(e) => setShortNameInput(e.target.value)}  value={shortNameInput} /> <br/>
      <label >Placeholder </label> <br/>
      <MyInput onChange={(e) => setPlaceholderInput(e.target.value)}  value={placeholderInput} /> <br/>
      <label >Максимальное количество символов (если 0, то максимальное значение не будет указано)</label> <br/>
      <MyInput style={{marginBottom: '10px'}} onChange={(e) => setMaxLengthInput(e.target.value)}  type="number" value={maxLengthInput} /> <br/>
      <MyButton onClick={() => { textareaNameInput.trim() === ''  || shortNameInput.trim() === '' ? alert('Заполните все обязательные поля') :createTextarea(textareaNameInput, shortNameInput,  placeholderInput, maxLengthInput)}}>
        Создать
      </MyButton>
    </div>
  );
}
