import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Coffee } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

type CoffeeReponse = Omit<Coffee, 'createdAt'> & { createdAt: string };

// TODO: Add tests for teas endpoint && use in-memory database for testing, instead of mocking the PrismaService.
describe('AppController (e2e)', () => {
  let app: INestApplication;
  const mockCoffees: CoffeeReponse[] = [
    {
      id: 1,
      name: 'Espresso',
      createdAt: new Date().toString(),
      type: 'ARABICA',
      imgUrl: 'url',
    },
    {
      id: 2,
      name: 'Latte',
      createdAt: new Date().toString(),
      type: 'ARABICA',
      imgUrl: 'url',
    },
  ];
  const prismaServiceMock = {
    coffee: {
      findMany: jest.fn().mockReturnValueOnce(mockCoffees),
    },
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaServiceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('/coffees (GET)', () => {
    it('returns an array of coffees', async () => {
      const expectedResult = mockCoffees;

      return request(app.getHttpServer())
        .get('/coffees')
        .expect(200)
        .expect(expectedResult);
    });
  });
});
