import { Module } from '@nestjs/common';
import { TeasService } from './services/teas.service';
import { TeasController } from './controllers/teas.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TeasRepository } from './repositories/Teas.repository';

@Module({
  imports: [PrismaModule],
  controllers: [TeasController],
  providers: [TeasService, TeasRepository],
})
export class TeasModule {}
