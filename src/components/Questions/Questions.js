import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AnswerInput from "./AnswerInput/AnswerInput";
import { setUserAnswer } from "../redux/ActionCreatores";

function getNextQuestionId(questions, currentQuestionId) {
  const keys = Object.keys(questions);
  console.log(keys);
  console.log(currentQuestionId);
  const currentQuestionIndex = keys.findIndex(
    (item) => item == currentQuestionId
  );
  const nextQuestionId = keys[currentQuestionIndex + 1];
  return nextQuestionId;
}

function isLastQuestion(questions, userAnswers) {
  return Object.keys(questions).length == Object.keys(userAnswers).length;
}

function Questions({ history, match, userAnswers, questions, setUserAnswer }) {
  const questionId = match.params.questionId;
  const question = questions[questionId];
  const [selectedAnswerId, setselectedAnswerId] = useState("a-one");

  useEffect(() => {
    const lastQuestion = isLastQuestion(questions, userAnswers);
    console.log(lastQuestion);
    if (userAnswers && userAnswers[questionId] && !lastQuestion) {
      const nextQuestionId = getNextQuestionId(questions, questionId);
      history.push("/questions/" + nextQuestionId);
    }

    if (lastQuestion) {
      history.push("/result");
    }
  }, [userAnswers]);

  const anwersJSX = question.answers.map((answer) => {
    return (
      <AnswerInput
        key={answer.id}
        changed={() => {
          handleInputChange(answer.id);
        }}
        answer={answer}
      />
    );
  });

  function handleInputChange(answerId) {
    setselectedAnswerId(answerId);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setUserAnswer({
      questionId,
      answerId: selectedAnswerId,
    });
  }

  return (
    <main>
      <h1>Questions</h1>
      <h2>{questionId}</h2>
      <p>{question.title}</p>
      <form onSubmit={handleFormSubmit}>
        {anwersJSX}
        <button className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    questions: state.reducer.questions,
    userAnswers: state.reducer.userAnswers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAnswer: ({ questionId, answerId }) => {
      dispatch(setUserAnswer({ questionId, answerId }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
