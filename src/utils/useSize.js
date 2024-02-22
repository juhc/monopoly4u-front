import { reactive } from "vue";


export function useSize() {
    const FIELD_WIDTH = 55;
    const FIELD_HEIGHT = 100;
    const CORNER_SIZE = 100;
    const FIELDS_COUNT_ON_LINE = 9
    const BOARD_SIZE = FIELDS_COUNT_ON_LINE * FIELD_WIDTH + CORNER_SIZE * 2;
    
}