import { type } from "@testing-library/user-event/dist/type";

function FinishScreen({
  points,
  maxPoints,
  numQuestions,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of <strong>{maxPoints}</strong>{" "}
        in {numQuestions} questions. {Math.ceil(percentage)}% correct!
      </p>
      <p className="highscore">
        Highscore: <strong>{highscore}</strong>
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
