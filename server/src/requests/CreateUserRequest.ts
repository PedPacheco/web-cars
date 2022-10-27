export interface IUserRequest {
  id: string;
  name: string;
  email: string;
  password: string | null;
  cep: string | null;
  phone: string | null;
}
