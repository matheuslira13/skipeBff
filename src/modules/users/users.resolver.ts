import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { NotFoundError } from 'rxjs';

export type User = any;
@Resolver()
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Query()
  async findByEmail(@Args('email') email: string, @Context() context: any) {
    console.log('teste', email);
    try {
      const legalHeader = context.headers.legal;
      if (!legalHeader || legalHeader !== 'teste-de-header') {
        throw new Error('Nao autorizado');
      }
      const outroHeader = context.headers.xcompanykey;
      if (outroHeader === 'INTERNO_EASE') {
        console.log('em producao');
        const user = await this.userService.findOne(email);
        return { ...user, ambiente: 'em producao' };
      } else if (outroHeader === 'SDB2_MTECH') {
        console.log('em SDB ;) ');
        const user = await this.userService.findOne(email);
        return { ...user, ambiente: 'em SDB' };
      }
      throw new Error('algo de errado nao esta certo');
    } catch (error) {
      console.error('Erro no findByEmail:', error);
      throw new Error('Credenciais inválidas');
    }
  }
}
