import { IResponse } from "../interfaces/response.interface";
import { IUser } from "../store/user/interfaces/user.interface";

export const USER_MOCK: IResponse<IUser> = {
  success: true,
  data: {
    id: "6005aa690f7cd41e6bbacafe",
    name: "User Mock",
    email: "usermock@restaurant.com",
  },
};
