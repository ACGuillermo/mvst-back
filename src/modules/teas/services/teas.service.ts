import { Injectable } from '@nestjs/common';
import { TeasRepository } from '../repositories/Teas.repository';

@Injectable()
export class TeasService {
  constructor(private prisma: TeasRepository) {}
  findAll() {
    return this.prisma.findAll();
  }
}
