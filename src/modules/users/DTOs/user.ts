import { InputType } from '@nestjs/graphql';

@InputType()
export class UserDTO {
  userID: number;
  name: string;
  email: string;
  password: string;
}
