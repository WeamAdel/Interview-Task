import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUserGrade } from "../redux/ActionCreatores";

function Result({ userName, grade, setUserGrade }) {
  useEffect(() => {
    setUserGrade();
  }, []);

  return (
    <main>
      <h1>Your results</h1>
      <p>
        congrats <em>{userName}</em> you got <strong>{grade}/10</strong>
      </p>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.reducer.userName,
    grade: state.reducer.grade,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserGrade: () => {
      dispatch(setUserGrade());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
