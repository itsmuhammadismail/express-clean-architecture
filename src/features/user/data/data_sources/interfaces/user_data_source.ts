import { LoginUserRequest } from "../../../domain/entities/login_user";
import { RegisterUserRequest } from "../../../domain/entities/register_user";
import UserModel from "../../models/interfaces/user";

interface UserDS {
  getAllDistributors(): Promise<UserModel[]>;
  getAllRetailers(user: UserModel): Promise<UserModel[]>;
}

export default UserDS;
