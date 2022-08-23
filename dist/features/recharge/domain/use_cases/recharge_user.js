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
const user_data_source_1 = __importDefault(require("../../../user/data/data_sources/user_data_source"));
const recharge_repository_impl_1 = __importDefault(require("../repositories/recharge_repository_impl"));
class RechargeUserUseCase {
    constructor() {
        this.rechargeRepository = new recharge_repository_impl_1.default();
        this.userDataSource = new user_data_source_1.default();
    }
    call(params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(params.body.amount);
            const recharge = {
                amount: params.body.amount,
                user: params.user,
                recharged_user: yield this.userDataSource.getUserFromContact(params.body.contact),
            };
            const result = yield this.rechargeRepository.rechargeUser(recharge);
            return result;
        });
    }
}
exports.default = RechargeUserUseCase;
