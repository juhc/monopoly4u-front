import { reactive } from "vue";


export function useSize() {
    const FIELD_WIDTH = 55;
    const FIELD_HEIGHT = 100;
    const CORNER_SIZE = 100;
    const FIELDS_COUNT_ON_LINE = 9;
    const BOARD_SIZE = FIELDS_COUNT_ON_LINE * FIELD_WIDTH + CORNER_SIZE * 2;
    const ACTIONS_HISTORY_SIZE = BOARD_SIZE - CORNER_SIZE * 2;
    
    const size = {
        FIELD: {
            WIDTH: FIELD_WIDTH,
            HEIGHT: FIELD_HEIGHT
        },
        CORNER: {
            SIDE: CORNER_SIZE
        },
        BOARD: {
            SIDE: BOARD_SIZE
        },
        ACTIONS_HISTORY:{
            SIDE: ACTIONS_HISTORY_SIZE
        },

        ELEMENTS_IN_LINE: 10
    }

    return size
}