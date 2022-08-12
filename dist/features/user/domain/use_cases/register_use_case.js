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
const auth_repository_impl_1 = __importDefault(require("../repositories/auth_repository_impl"));
class RegisterUseCase {
    constructor() {
        this.authRepository = new auth_repository_impl_1.default();
    }
    call(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const token = (_a = params.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
            const authUser = params.user;
            const result = yield this.authRepository.register(params.body, authUser);
            return result;
        });
    }
}
exports.default = RegisterUseCase;
