import { useShadowReducer } from "./useShadowReducer";

const useShadow = () => {
  const [reducerState, dispatch] = useShadowReducer();
  const { radius, width, height, boxShadowDistance, blurRadius, color } =
    reducerState;

  return {
    boxShadowDistance,
    blurRadius,
    radius,
    width,
    height,
    color,
    dispatch,
  };
};

export { useShadow };
