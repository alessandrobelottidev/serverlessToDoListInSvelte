import { writable } from "svelte/store"

export let authStatus = writable('SIGNED_OUT')
export let todos = writable([])