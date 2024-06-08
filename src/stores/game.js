import { defineStore } from "pinia";
import { reactive, ref } from "vue";


export const useGameStore = defineStore("game", () => {
    const history = reactive([]);
    const playersList = ref([]);
    const currentPlayer = ref({
        name: ""
    });

    const clear = () => {
        history.value = [];
        playersList.value = [];
        currentPlayer.value = {
            name: ''
        };
    }

    return { history, clear, playersList, currentPlayer }
})