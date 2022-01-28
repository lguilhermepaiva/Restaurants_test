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
class PlateRepository {
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
            value: 'Plates'
        });
    }
    getByRestaurantId(restaurant_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = yield this.em
                .query(this.TABLE_NAME)
                .select('*')
                .where({ RestaurantId: restaurant_id });
            return a;
        });
    }
}
exports.default = PlateRepository;
