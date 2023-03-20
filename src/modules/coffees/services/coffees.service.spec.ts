import { Test } from '@nestjs/testing';
import { CoffeesService } from './coffees.service';
import { CoffeesRepository } from '../repositories/Coffee.repository';
import { Coffee } from '@prisma/client';

// Mock data
const mockCoffees: Coffee[] = [
  {
    id: 1,
    name: 'Espresso',
    createdAt: new Date(),
    type: 'ARABICA',
    imgUrl: 'url',
  },
  {
    id: 2,
    name: 'Latte',
    createdAt: new Date(),
    type: 'ARABICA',
    imgUrl: 'url',
  },
];

// Mock CoffeesRepository
const mockCoffeesRepository = () => ({
  findAll: jest.fn().mockResolvedValue(mockCoffees),
});

describe('CoffeesService', () => {
  let coffeesService: CoffeesService;
  let coffeesRepository: CoffeesRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CoffeesService,
        { provide: CoffeesRepository, useFactory: mockCoffeesRepository },
      ],
    }).compile();

    coffeesService = moduleRef.get<CoffeesService>(CoffeesService);
    coffeesRepository = moduleRef.get<CoffeesRepository>(CoffeesRepository);
  });

  describe('findAll', () => {
    it('should return all coffees', async () => {
      const result = await coffeesService.findAll();
      expect(result).toEqual(mockCoffees);
      expect(coffeesRepository.findAll).toHaveBeenCalled();
    });
  });
});
