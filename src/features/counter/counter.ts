import { createModel } from "@rematch/core";
import { RootModel } from "app/models";

export type CounterType = number;

export const counter = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment(state, payload: number) {
      return state + payload;
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number, state) {
      console.log("Current state", state);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.counter.increment(payload);
    },
  }),
});
