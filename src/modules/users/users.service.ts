import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'john.@bankly.com',
      password: 'changeme',
      name: 'john',
    },
    {
      userId: 2,
      email: 'maria@bankly.com',
      password: 'guess',
      name: 'maria',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
