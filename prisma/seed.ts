import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const COFFEE_NAMES = [
    'Black Coffee',
    'Turkish Coffee very long name just to test',
    'Cold Brew',
    'Iced Coffee',
    'Ristretto',
    'Doppio',
    'Americano',
    'Lungo',
    'Caffé Crema',
    'Café Zorro',
    'Café Cubano',
    'Cappuccino',
    'Latte',
    'Piccolo Latte very long name just to test',
    'Mocha',
    'Macchiato',
    'Cortado',
    'Café Bombon',
    'Cafe Con Leche',
    'Carajillo',
    'Espresso Romano very long name just to test',
  ];

  const COFFEE_TYPES = ['ARABIC', 'ROBUSTA'];

  const TEA_NAMES = [
    'Black Tea',
    'Green Tea',
    'Oolong Tea very long name just to test',
    'White Tea',
    'Yellow Tea',
    'Pu-erh Tea',
    'Dark Tea',
    'Herbal Tea',
    'Flavored Tea very long name ',
    'Rooibos Tea very long name for testing',
    'Mate Tea',
    'Chai Tea',
    'Tisane',
    'Kombucha',
    'Kava',
    'Matcha',
  ];

  await prisma.coffee.deleteMany();
  await prisma.tea.deleteMany();

  Promise.all(
    COFFEE_NAMES.map((n, i) =>
      prisma.coffee.create({
        data: {
          name: n,
          type: COFFEE_TYPES[Math.floor(Math.random() * COFFEE_TYPES.length)],
          imgUrl: `https://source.unsplash.com/150x200/?coffee-${i}`,
        },
      }),
    ),
  )
    .then(() => console.info('Coffee records created successfully'))
    .catch((e) => console.error('Error creating Coffee records', e));

  Promise.all(
    TEA_NAMES.map((n, i) =>
      prisma.tea.create({
        data: {
          name: n,
          imgUrl: `https://source.unsplash.com/150x200/?tea-${i}`,
        },
      }),
    ),
  )
    .then(() => console.info('Tea records created successfully'))
    .catch((e) => console.error('Error creating Tea records', e));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
