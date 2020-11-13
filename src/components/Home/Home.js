import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUserName } from "../redux/ActionCreatores";

function Home({ history, userName, questions, setUserName }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (userName) {
      const firstQuestionId = Object.keys(questions)[0];
      history.push("/questions/" + firstQuestionId);
    }
  }, [userName]);

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setUserName(name);
  }

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label className="d-block" htmlFor="username">
            Please enter your name
          </label>
          <input
            name="username"
            type="text"
            value={name}
            id="username"
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.reducer.userName,
    questions: state.reducer.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => {
      dispatch(setUserName(userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
