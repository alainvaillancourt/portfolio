import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const locale = writable(browser && (localStorage.getItem("locale")) || "anyname");
locale.subscribe((val) => browser && localStorage.setItem("locale", val));
