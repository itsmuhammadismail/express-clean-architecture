import UserModel from "../models/interfaces/user";
import User from "../models/user_model";
import UserDS from "./interfaces/user_data_source";

class UserDataSource implements UserDS {
  async getAllDistributors(): Promise<UserModel[]> {
    const findDistributers = await User.find({ role: "distributor" });
    return findDistributers;
  }

  async getAllRetailers(user: UserModel): Promise<UserModel[]> {
    const findRetailers = await User.find({ role: "retailer", user: user });
    return findRetailers;
  }
}

export default UserDataSource;
