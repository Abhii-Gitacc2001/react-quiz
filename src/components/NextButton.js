function NextButton({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "NextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
