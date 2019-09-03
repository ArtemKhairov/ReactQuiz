import React from "react";
import "./ActiveQuiz.css";
import AnswersList from "./AnswerList/AnswerList";

const ActiveQuiz = props => {
  console.log("ACtive", props);
  return (
    <div className="ActiveQuiz1">
      <p className="Question">
        <span> {props.question}</span>
        <small>
          {props.answerNumber} of {props.quizLength}
        </small>
      </p>
      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;
