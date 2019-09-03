import React from "react";
import "./AnswerItem.css";

const Answeritem = props => {
  console.log("Ative", props.state);
  const cls = ["answeritem", "answeritem:hover"];
  if (props.state) {
    cls.push([props.state]);
  }
  return (
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};
export default Answeritem;
