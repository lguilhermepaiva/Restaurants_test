"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4_1 = require("uuidv4");
class Plate {
    constructor(name, description, restaurant) {
        Object.defineProperty(this, "Id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Restaurant", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.Id = (0, uuidv4_1.uuid)();
        this.Name = name;
        this.Description = description;
        this.Restaurant = restaurant;
    }
}
exports.default = Plate;
