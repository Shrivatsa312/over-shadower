import { useReducer } from "react";

export type ShadowReducerActionTypeKey =
  | "SET_RADIUS"
  | "SET_WIDTH"
  | "SET_HEIGHT"
  | "SET_BOX_SHADOW_DISTANCE"
  | "SET_BLUR_RADIUS"
  | "SET_COLOR";

export type ShadowReducerState = {
  radius: number;
  width: number;
  height: number;
  boxShadowDistance: number;
  blurRadius: number;
  color: string;
};

type ShadowReducerAction =
  | {
      type: "SET_RADIUS";
      payload: ShadowReducerState["radius"];
    }
  | {
      type: "SET_WIDTH";
      payload: ShadowReducerState["width"];
    }
  | {
      type: "SET_HEIGHT";
      payload: ShadowReducerState["height"];
    }
  | {
      type: "SET_BOX_SHADOW_DISTANCE";
      payload: ShadowReducerState["boxShadowDistance"];
    }
  | {
      type: "SET_BLUR_RADIUS";
      payload: ShadowReducerState["blurRadius"];
    }
  | {
      type: "SET_COLOR";
      payload: ShadowReducerState["color"];
    };

const INITIAL_STATE: ShadowReducerState = {
  radius: 0,
  width: 200,
  height: 200,
  boxShadowDistance: 0,
  blurRadius: 0,
  color: "",
};

const SHADOW_REDUCER = (
  state: ShadowReducerState,
  action: ShadowReducerAction
): ShadowReducerState => {
  switch (action.type) {
    case "SET_RADIUS":
      return {
        ...state,
        radius: action.payload,
      };
    case "SET_WIDTH":
      return {
        ...state,
        width: action.payload,
      };
    case "SET_HEIGHT":
      return {
        ...state,
        height: action.payload,
      };
    case "SET_BOX_SHADOW_DISTANCE":
      return {
        ...state,
        boxShadowDistance: action.payload,
      };
    case "SET_BLUR_RADIUS":
      return {
        ...state,
        blurRadius: action.payload,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export const useShadowReducer = () => useReducer(SHADOW_REDUCER, INITIAL_STATE);
