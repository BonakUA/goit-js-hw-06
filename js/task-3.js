class StringBuilder {
    #value;
    constructor(params) {
        this.#value = params;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value = this.#value.padEnd(3, str);
    }
    padStart(str) {
        this.#value = this.#value.padStart(2, str);
    }
    padBoth(str) {
        this.#value = this.#value.padStart(4, str).padEnd(5, str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
