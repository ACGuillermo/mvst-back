import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Prisma } from '@prisma/client';

export interface Beverage {
  id: number;
  name: string;
  createdAt: Date;
}

type LowercaseStringUnion<T extends string> = T extends any
  ? Lowercase<T>
  : never;

type LowerCasePrismaModelNames = LowercaseStringUnion<Prisma.ModelName>;

export abstract class AbstractBeverageRepository<T extends Beverage> {
  private _modelName: string;
  constructor(
    protected prisma: PrismaService,
    modelName: LowerCasePrismaModelNames,
  ) {
    this._modelName = modelName;
  }

  async findAll(): Promise<T[]> {
    return this.prisma[this._modelName].findMany();
  }
}
