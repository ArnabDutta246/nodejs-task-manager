"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = require("./environment");
mongoose_1.default
    .connect(environment_1.Environment.DB_URL)
    .then(() => {
    console.log("DB connection is successfully set");
})
    .catch((err) => {
    console.log("DB conncetion error: ", err);
});
