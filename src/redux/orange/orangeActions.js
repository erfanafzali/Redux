import { BUY_ORANGE } from "./orangeTypes";

export function buyOrange(orange = 1) {
  return {
    type: BUY_ORANGE,
    payload: orange,
  };
}
