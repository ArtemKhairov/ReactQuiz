import React from "react";
import "./AnswerList.css";
import Answeritem from "./Answer/AnswerItem";

const AnswersList = props => (
  <ul className="answerlist">
    {props.answers.map((answer, index) => {
      return (
        <Answeritem
          answer={answer}
          key={index}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswersList;
