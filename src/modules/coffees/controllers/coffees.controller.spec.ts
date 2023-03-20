import { Test } from '@nestjs/testing';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from '../services/coffees.service';
import { Coffee } from '@prisma/client';

describe('CoffeesController', () => {
  let coffeesController: CoffeesController;
  let coffeesService: CoffeesService;

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

  const mockCoffeesService = () => ({
    findAll: jest.fn(),
  });

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CoffeesController],
      providers: [{ provide: CoffeesService, useFactory: mockCoffeesService }],
    }).compile();

    coffeesController = moduleRef.get<CoffeesController>(CoffeesController);
    coffeesService = moduleRef.get<CoffeesService>(CoffeesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return an array of coffees', async () => {
      const expectedResult: Coffee[] = mockCoffees;

      jest.spyOn(coffeesService, 'findAll').mockResolvedValue(expectedResult);

      const result = await coffeesController.findAll();

      expect(result).toEqual(expectedResult);
      expect(coffeesService.findAll).toHaveBeenCalledTimes(1);
    });
  });
});
