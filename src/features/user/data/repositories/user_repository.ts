import {
  LoginUserRequest,
  LoginUserResponse,
} from "../../domain/entities/login_user";
import { MessageResponse } from "../../domain/entities/message";
import { RegisterUserRequest } from "../../domain/entities/register_user";
import UserModel from "../models/interfaces/user";

interface UserRepository {
  getDistributors(): Promise<UserModel[]>;
  getRetailers(distributorId: string): Promise<UserModel[]>;
}

export default UserRepository;
