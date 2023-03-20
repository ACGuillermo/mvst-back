import { Test } from '@nestjs/testing';
import { CoffeesRepository } from './coffee.repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Coffee } from '@prisma/client';

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

describe('CoffeesRepository', () => {
  let coffeesRepository: CoffeesRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [CoffeesRepository, PrismaService],
    }).compile();

    coffeesRepository = moduleRef.get<CoffeesRepository>(CoffeesRepository);
    prismaService = moduleRef.get<PrismaService>(PrismaService);
    prismaService.coffee.findMany = jest.fn().mockReturnValueOnce(mockCoffees);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return list of coffees', async () => {
      const expectedResult: Coffee[] = mockCoffees;
      const result = await coffeesRepository.findAll();

      expect(result).toEqual(expectedResult);
      expect(prismaService.coffee.findMany).toHaveBeenCalledTimes(1);
    });
  });
});
