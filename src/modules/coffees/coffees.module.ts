import { Module } from '@nestjs/common';
import { CoffeesService } from './services/coffees.service';
import { CoffeesController } from './controllers/coffees.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CoffeesRepository } from './repositories/Coffee.repository';

@Module({
  imports: [PrismaModule],
  controllers: [CoffeesController],
  providers: [CoffeesService, CoffeesRepository],
})
export class CoffeesModule {}
