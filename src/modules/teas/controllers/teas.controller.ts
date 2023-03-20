import { Controller, Get } from '@nestjs/common';
import { TeasService } from '../services/teas.service';

@Controller('teas')
export class TeasController {
  constructor(private readonly teasService: TeasService) {}

  @Get()
  findAll() {
    return this.teasService.findAll();
  }
}
