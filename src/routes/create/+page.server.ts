import { dummyList } from "$lib/db";

export function load() {
    return {
        title: "Make Your List",
        listItems: dummyList
    }
}