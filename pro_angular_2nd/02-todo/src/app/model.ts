﻿export class Model {
    user: string;
    items: TodoItem[];

    constructor() {
        this.user = "Adam";
        this.items = [new TodoItem("Buy Flowers", false),
            new TodoItem("Get Shoes", false),
            new TodoItem("Collect Tickets", false),
            new TodoItem("Call Joe", false)]
    }
}

export class TodoItem {
    action: string;
    done: boolean;

    constructor(action: string, done: boolean) {
        this.action = action;
        this.done = done;
    }
}
