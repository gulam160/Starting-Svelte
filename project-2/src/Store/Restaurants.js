import { writable } from "svelte/store";

const RestaurantsStore = writable({ totalPage: 0, restaurants: [] });

export { RestaurantsStore };
