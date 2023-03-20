import { Coffee } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { AbstractBeverageRepository } from 'src/modules/shared/repositories/abstract-beverage.repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CoffeesRepository extends AbstractBeverageRepository<Coffee> {
  constructor(prisma: PrismaService) {
    super(prisma, 'coffee');
  }
}
