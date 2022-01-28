"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4_1 = require("uuidv4");
class Restaurant {
    constructor(name, culinary, streetAddress, numberAddress, district, phone) {
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
        Object.defineProperty(this, "Culinary", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "StreetAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "NumberAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "District", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Phone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.Id = (0, uuidv4_1.uuid)();
        this.Name = name;
        this.Culinary = culinary;
        this.StreetAddress = streetAddress;
        this.NumberAddress = numberAddress;
        this.District = district;
        this.Phone = phone;
    }
}
exports.default = Restaurant;
