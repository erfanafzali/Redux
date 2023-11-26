import { BUY_APPLE } from "./appleTypes";

export function buyApple(apple = 1) {

    return {
        type: BUY_APPLE,
        payload: apple,
    }

}