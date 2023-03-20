import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CoffeesModule } from './modules/coffees/coffees.module';
import { TeasModule } from './modules/teas/teas.module';

@Module({
  imports: [PrismaModule, CoffeesModule, TeasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
