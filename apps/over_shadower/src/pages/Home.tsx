import * as React from "react";
import { useShadow } from "../hooks/useShadow";
import { ShadowReducerActionTypeKey } from "../hooks/useShadowReducer";
import { cn } from "../utils";
import { RangeInput } from "../components";

const Home = () => {
  const {
    radius,
    height,
    width,
    dispatch,
    boxShadowDistance,
    blurRadius,
    color,
  } = useShadow();

  const handleChange =
    (field: Exclude<ShadowReducerActionTypeKey, "SET_COLOR">) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: field,
        payload: parseInt(e.target.value),
      });
    };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_COLOR", payload: e.target.value });
  };

  return (
    <div className="flex justify-center items-center gap-10">
      <div className=" w-[1200px] h-[600px] flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center">
          <div
            className={cn("bg-red-500 w-20 h-20")}
            style={{
              borderRadius: radius,
              width,
              height,
              boxShadow: `${boxShadowDistance}px ${boxShadowDistance}px ${blurRadius}px ${color}, -${boxShadowDistance}px -${boxShadowDistance}px ${blurRadius}px ${color}`,
            }}
          />
        </div>
        <div className="w-1/2 bg-yellow-950 h-full flex items-center justify-center flex-col text-left gap-4">
          <RangeInput
            field="SET_RADIUS"
            label="Radius"
            defaultValue={0}
            id="radius"
            onChange={handleChange}
          />
          <RangeInput
            field="SET_WIDTH"
            label="Width"
            min={10}
            max={400}
            defaultValue={200}
            id="width"
            onChange={handleChange}
          />
          <RangeInput
            field="SET_HEIGHT"
            label="Height"
            min={10}
            max={400}
            defaultValue={200}
            id="height"
            onChange={handleChange}
          />
          <RangeInput
            field="SET_BOX_SHADOW_DISTANCE"
            label="Distance"
            defaultValue={0}
            id="distance"
            onChange={handleChange}
          />
          <RangeInput
            field="SET_BLUR_RADIUS"
            label="Blur"
            defaultValue={0}
            id="blur"
            onChange={handleChange}
          />
          <div className="flex gap-3">
            <label htmlFor="color">Color</label>
            <input
              id="color"
              defaultValue="#ffffff"
              type="color"
              onChange={handleColorChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
