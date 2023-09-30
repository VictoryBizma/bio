import { writable } from "svelte/store";

export let textCopyState = writable({
    text: "",
    timeOut: 0
});