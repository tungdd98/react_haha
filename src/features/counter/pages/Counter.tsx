import React from "react";
import { connect } from "react-redux";
import { RootState, Dispatch } from "app/store";

const mapState = (state: RootState) => ({
  counter: state.counter,
});

const mapDispatch = (dispatch: Dispatch) => ({
  increment: () => dispatch.counter.increment(1),
  incrementAsync: () => dispatch.counter.incrementAsync(1),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

export const Counter: React.FC<Props> = (props) => {
  return (
    <div>
      The count is {props.counter}
      <button onClick={() => props.increment()}>increment</button>
      <button onClick={() => props.incrementAsync()}>incrementAsync</button>
    </div>
  );
};

export default connect(mapState, mapDispatch)(Counter);
