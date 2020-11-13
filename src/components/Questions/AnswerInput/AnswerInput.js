import PropTypes from "prop-types";
import React from "react";

function AnswerInput({ answer, changed }) {
  return (
    <div className="input-group">
      <label className="d-block" htmlFor={answer.id}>
        {answer.answer}
      </label>
      <input
        id={answer.id}
        name="answer"
        type="radio"
        value={answer.answer}
        onChange={changed}
      />
    </div>
  );
}

AnswerInput.propTypes = {
  changed: PropTypes.func.isRequired,
  answer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnswerInput;
