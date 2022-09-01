import store from "../app/store";

const Todo = () => {
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) =>
            store.dispatch({
              type: "SET_TEXT",
              payload: { text: e.target.value },
            })
          }
        />
        <button
          onClick={() =>
            store.dispatch({
              type: "ADD_TODO",
            })
          }
        >
          {" "}
          +{" "}
        </button>
        <button onClick={() => store.dispatch({ type: "SHOW_STATE" })}>
          Show State
        </button>
      </div>
    </>
  );
};

export default Todo;
