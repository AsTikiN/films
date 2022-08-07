import { bindActionCreators } from "@reduxjs/toolkit";
import { rootReducerAction } from "../store/reducers/rootReducerAction";
import { useTypedDispatch } from "./useTypedDispatch";

export const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(rootReducerAction, dispatch);
};
