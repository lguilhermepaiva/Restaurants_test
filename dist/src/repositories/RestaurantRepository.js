"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class RestaurantRepository {
    constructor(em) {
        Object.defineProperty(this, "em", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: em
        });
        Object.defineProperty(this, "TABLE_NAME", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Restaurants'
        });
        Object.defineProperty(this, "TABLE_NAME_2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Plates'
        });
    }
    listenAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.em.query(this.TABLE_NAME).select('*');
        });
    }
    getById(restaurant_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [restaurant] = yield this.em
                .query(this.TABLE_NAME)
                .select('*')
                .where({ Id: restaurant_id });
            return restaurant;
        });
    }
    getRestaurantsByPartName(partName) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = [
                'SELECT DISTINCT',
                'r."Id" as "Id",',
                'r."Name" as "Name",',
                'r."Culinary" as "Culinary",',
                'r."UrlImage" as "UrlImage"',
                `FROM "${this.TABLE_NAME}" AS r`,
                `INNER JOIN "${this.TABLE_NAME_2}" AS p`,
                'ON (r."Id" = p."RestaurantId")',
                `WHERE LOWER(r."Name") LIKE LOWER('%${partName}%')`,
                `OR LOWER(p."Name") LIKE LOWER('%${partName}%')`,
                `OR LOWER(p."Description") LIKE LOWER('%${partName}%')`,
            ].join('\n');
            const { rows } = yield this.em.raw(query);
            return rows;
        });
    }
}
exports.default = RestaurantRepository;
