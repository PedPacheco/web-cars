export interface CreateUserRequest {
  id: string;
  name: string;
  email: string;
  password: string | null;
  cep: string | null;
  phone: string | null;
}
