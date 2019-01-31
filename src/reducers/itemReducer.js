import { FETCHING_ITEMS, FETCHED_ITEMS, RESET } from "../types";

const initialState = {
    items: [],
    loadingItems: false,
    selectedItems: [],
    isLoaded: false,
    itemToDelete: [],
    itemToDeleteStatus: "",
    addedItem: false,
    donationMarkers: []
};


export default function itemReducer(state = initialState, action) {
    console.log("%c itemReducer", "color: purple", state, action);
    switch (action.type) {
        case FETCHED_ITEMS:
            return { ...state, items: action.payload, loadingItems: false, isLoaded: true, addedItem: false };
        case FETCHING_ITEMS:
            return { ...state, loadingItems: true, isLoaded: false, addedItem: false, itemToDeleteStatus: "", selectedItems: [] };
        case RESET:
            return initialState;
        default:
            return state;
    }
}