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
exports.down = exports.up = void 0;
const TABLE_NAME = "Plates";
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.schema.createTable(TABLE_NAME, (table) => {
            table.uuid("Id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
            table.string("Name").notNullable();
            table.string("Description").notNullable();
            table
                .uuid("RestaurantId")
                .notNullable()
                .references("Id")
                .inTable("Restaurants")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.double("Price").notNullable();
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.schema.dropTable(TABLE_NAME);
    });
}
exports.down = down;
