export interface IUserRequest {
    username: string;
    email: string;
    password: Date;
    isAdmin: boolean;
}

export interface IUserResponse {
    id: number;
    username: string;
    email: string;
    password: Date;
    isAdmin: boolean;
}