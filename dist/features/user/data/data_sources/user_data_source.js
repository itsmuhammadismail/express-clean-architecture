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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user_model"));
class UserDataSource {
    getAllDistributors() {
        return __awaiter(this, void 0, void 0, function* () {
            const findDistributers = yield user_model_1.default.find({ role: "distributor" });
            return findDistributers;
        });
    }
    getAllRetailers(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const findRetailers = yield user_model_1.default.find({ role: "retailer", user: user });
            return findRetailers;
        });
    }
}
exports.default = UserDataSource;
