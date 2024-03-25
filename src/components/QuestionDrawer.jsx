import { Radio } from "antd";
import { useState } from "react";
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

import {useFormStore} from "../store/store";

export default function QuestionDrawer() {
  const [questionType, setQuestionType] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [questionShortName, setQuestionShortName] = useState("");
  const [questionAmount, setQuestionAmount] = useState(2);
  const [answers, setAnswers] = useState(
    Array.from({ length: questionAmount }, () => ({ name: "", shortName: "" }))
  );

  const { updateOpen, updateDates } = useFormStore();

  const onClose = () => {
    setQuestionType("");
    setQuestionName("");
    setQuestionShortName("");
    setQuestionAmount(2);

    updateOpen(false);
  };

  const handleAnswerNameChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index].name = value;
    setAnswers(newAnswers);
  };

  const handleAnswerShortNameChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index].shortName = value;
    setAnswers(newAnswers);
  };

  const handleAddData = () => {
    const newData = {
      element: questionType,
      type: questionType,
      fieldName: questionName,
      shortFieldName: questionShortName,
      answears: answers.map((answer) => ({
        name: answer.name,
        shortName: answer.shortName,
      })),
    };
    
    onClose();
    updateDates(newData);
  };

  return (
    <div>
      <Radio.Group
        onChange={(e) => setQuestionType(e.target.value)}
        buttonStyle="solid"
      >
        <Radio.Button style={{ marginBottom: "10px" }} value="radio">
          Один вариант ответа
        </Radio.Button>
        <Radio.Button value="checkbox">Несколько вариантов ответа</Radio.Button>
      </Radio.Group>
      <label>Название опросника*</label> <br />
      <MyInput
        value={questionName}
        onChange={(e) => setQuestionName(e.target.value)}
      />
      <br />
      <label>Короткое название на английском*</label> <br />
      <MyInput
        value={questionShortName}
        onChange={(e) => setQuestionShortName(e.target.value)}
      />
      <br />
      <label>Количество ответов</label> <br />
      <input
        className="my-input"
        min="2"
        max="50"
        type="number"
        value={questionAmount}
        onChange={(e) => {
          const amount = parseInt(e.target.value);
          setQuestionAmount(amount);
          setAnswers(
            Array.from({ length: amount }, () => ({ name: "", shortName: "" }))
          );
        }}
      />
      <br />
      <p>Инпуты:</p>
      {answers.map((answer, index) => (
        <div
          style={{
            border: "solid 1px black",
            borderRadius: "6px",
            padding: "15px 10px",
            marginBottom: "10px",
          }}
          key={index}
        >
          <label>Название ответа*</label> <br />
          <MyInput
          style={{marginBottom: '10px'}}
            value={answer.name}
            onChange={(e) => handleAnswerNameChange(index, e.target.value)}
          />
          <br />
          <label>Короткое название на английском*</label> <br />
          <MyInput
            value={answer.shortName}
            onChange={(e) => handleAnswerShortNameChange(index, e.target.value)}
          />
          <br />
        </div>
      ))}
      <MyButton
        onClick={() => {
          const allFieldsFilled = answers.every(
            (answer) =>
              answer.name.trim() !== "" && answer.shortName.trim() !== ""
          );

          if (
            !allFieldsFilled ||
            questionName.trim() === "" ||
            questionShortName.trim() === ""
          ) {
            alert("Заполните все обязательные поля");
          } else {
            handleAddData();
          }
        }}
        disabled={questionType === ""}
      >
        Добавить данные
      </MyButton>
    </div>
  );
}
