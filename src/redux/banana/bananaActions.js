import { BUY_BANANA } from "./bananaTypes";

export function buyBanana(banana = 1) {

    return {
        type: BUY_BANANA,
        payload: banana,
    }

}