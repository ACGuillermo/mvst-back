import { Injectable } from '@nestjs/common';
import { Coffee } from '@prisma/client';
import { CoffeesRepository } from '../repositories/Coffee.repository';

@Injectable()
export class CoffeesService {
  constructor(private prisma: CoffeesRepository) {}
  findAll(): Promise<Coffee[]> {
    return this.prisma.findAll();
  }
}
