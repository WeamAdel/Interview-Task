export const setUserName = (state, userName) => {
  return {
    ...state,
    userName,
  };
};

export const setUserAnswer = (state, { questionId, answerId }) => {
  return {
    ...state,
    userAnswers: {
      ...state.userAnswers,
      [questionId]: answerId,
    },
  };
};

export const setUserGrade = (state) => {
  const grade = calculateUserGrade(state.questions, state.userAnswers);
  return {
    ...state,
    grade: grade,
  };
};

const calculateUserGrade = (questions, userAnswers) => {
  let grade = 0;

  for (let questionId in userAnswers) {
    const isRightAnswer =
      questions[questionId].rightAnswerId == userAnswers[questionId];
    if (isRightAnswer) {
      grade += 2;
    }
  }

  return grade;
};
