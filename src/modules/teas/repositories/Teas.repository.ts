import { Tea } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { AbstractBeverageRepository } from 'src/modules/shared/repositories/abstract-beverage.repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class TeasRepository extends AbstractBeverageRepository<Tea> {
  constructor(prisma: PrismaService) {
    super(prisma, 'tea');
  }
}
