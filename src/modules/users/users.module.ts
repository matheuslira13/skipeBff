import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './users.resolver';

@Module({
  providers: [UsersService, UserResolver],
  exports: [UsersService],
})
export class UsersModule {}
