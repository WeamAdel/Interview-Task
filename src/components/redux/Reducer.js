import * as ActionTypes from "./ActionTypes";
import * as Utility from "./Utility";

const initialState = {
  userName: "",
  questions: {
    qOne: {
      title: "abcd? ",
      answers: [
        { id: "a-one", answer: "a" },
        { id: "a-two", answer: "b" },
        { id: "a-three", answer: "c" },
        { id: "a-four", answer: "d" },
      ],
      rightAnswerId: "a-one",
    },
    qTwo: {
      title: "xyzq? ",
      answers: [
        { id: "a-one", answer: "x" },
        { id: "a-two", answer: "y" },
        { id: "a-three", answer: "z" },
        { id: "a-four", answer: "w" },
      ],
      rightAnswerId: "a-one",
    },
    qThree: {
      title: "weam? ",
      answers: [
        { id: "a-one", answer: "w" },
        { id: "a-two", answer: "e" },
        { id: "a-three", answer: "a" },
        { id: "a-four", answer: "m" },
      ],
      rightAnswerId: "a-one",
    },
    qFour: {
      title: "qwer? ",
      answers: [
        { id: "a-one", answer: "q" },
        { id: "a-two", answer: "w" },
        { id: "a-three", answer: "e" },
        { id: "a-four", answer: "r" },
      ],
      rightAnswerId: "a-one",
    },
    qFive: {
      title: "hjll? ",
      answers: [
        { id: "a-one", answer: "h" },
        { id: "a-two", answer: "j" },
        { id: "a-three", answer: "k" },
        { id: "a-four", answer: "l" },
      ],
      rightAnswerId: "a-one",
    },
  },
  userAnswers: {
    //pair of questionId: answerId
  },
  userGrade: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER_NAME:
      return Utility.setUserName(state, action.payload);
    case ActionTypes.SET_USER_ANSWER:
      return Utility.setUserAnswer(state, action.payload);
    case ActionTypes.SET_USER_GRADE:
      return Utility.setUserGrade(state);
    default:
      return state;
  }
}

export default reducer;
