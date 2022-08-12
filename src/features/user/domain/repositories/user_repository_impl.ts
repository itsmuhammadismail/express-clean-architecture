import UserDataSource from "../../data/data_sources/user_data_source";
import UserMapper from "../../data/mapper/user_mapper";
import UserModel from "../../data/models/interfaces/user";
import UserRepository from "../../data/repositories/user_repository";

class UserRepositoryImpl implements UserRepository {
  userDataSource: UserDataSource;
  userMapper: UserMapper;
  constructor() {
    this.userDataSource = new UserDataSource();
    this.userMapper = new UserMapper();
  }

  async getDistributors(): Promise<UserModel[]> {
    return await this.userDataSource.getAllDistributors();
  }
  async getRetailers(distributorId: string): Promise<UserModel[]> {
    // await dis
    throw await new Error("Method not implemented.");
  }
}

export default UserRepositoryImpl;
