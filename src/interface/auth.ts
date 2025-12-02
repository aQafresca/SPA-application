export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface IAuthRequest {
  username: string;
  password: string;
}

export interface IAuthResponse extends IUser {
  accessToken: string;
  refreshToken: string;
}
