/* eslint-disable @typescript-eslint/no-require-imports */

const { PrismaClient } = require('@prisma/client');
const slugify = require('slugify');

const prisma = new PrismaClient();

const createSlug = function (text) {
  return slugify(text, { lower: true, strict: true });
};


const main = async () => {
  await prisma.$transaction(async (tx) => {
    await tx.restaurant.deleteMany();

    const restaurant = await tx.restaurant.create({
      data: {
        name: 'Mc Donalds',
        slug: createSlug('Mc Donalds'),
        description: 'Mc Donalds is a fast food restaurant',
        avatarImageUrl: 'https://www.mcdonalds.com/image1.jpg',
        coverImageUrl: 'https://www.mcdonalds.com/image1.jpg',
      },
    });

    const comboCategory = await tx.menuCategory.create({
      data: {
        name: 'Combo Meals',
        slug: createSlug('Combo Meals'),
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: 'Big Mac Combo',
          slug: createSlug('Big Mac Combo'),
          description: 'Big Mac, fries and drink',
          price: 29.9,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: comboCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Cheeseburger Combo',
          slug: createSlug('Cheeseburger Combo'),
          description: 'Cheeseburger, fries and drink',
          price: 24.9,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: comboCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Chicken Nuggets Combo',
          slug: createSlug('Chicken Nuggets Combo'),
          description: '10 nuggets, fries and drink',
          price: 27.9,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: comboCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });

    const burgersCategory = await tx.menuCategory.create({
      data: {
        name: 'Hamburgers',
        slug: createSlug('Hamburgers'),
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: 'Burger 1',
          slug: createSlug('Burger 1'),
          description: 'Delicious beef burger #1',
          price: 39.9,
          imageUrl: restaurant.coverImageUrl,
          ingredients: ['bun', 'cheese', 'bacon', 'beef', 'tomato', 'lettuce', 'onion', 'mayo', 'sauce', 'ketchup', 'mustard'],
          menuCategoryId: burgersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Burger 2',
          slug: createSlug('Burger 2'),
          description: 'Delicious beef burger #2',
          price: 39.9,
          imageUrl: restaurant.coverImageUrl,
          ingredients: ['bun', 'cheese', 'bacon', 'beef', 'tomato', 'lettuce', 'onion', 'mayo', 'sauce', 'ketchup', 'mustard'],
          menuCategoryId: burgersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Burger 3',
          slug: createSlug('Burger 3'),
          description: 'Delicious beef burger #3',
          price: 39.9,
          imageUrl: restaurant.coverImageUrl,
          ingredients: ['bun', 'cheese', 'bacon', 'beef', 'tomato', 'lettuce', 'onion', 'mayo', 'sauce', 'ketchup', 'mustard'],
          menuCategoryId: burgersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Burger 4',
          slug: createSlug('Burger 4'),
          description: 'Delicious beef burger #4',
          price: 39.9,
          imageUrl: restaurant.coverImageUrl,
          ingredients: ['bun', 'cheese', 'bacon', 'beef', 'tomato', 'lettuce', 'onion', 'mayo', 'sauce', 'ketchup', 'mustard'],
          menuCategoryId: burgersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Burger 5',
          slug: createSlug('Burger 5'),
          description: 'Delicious beef burger #5',
          price: 39.9,
          imageUrl: restaurant.coverImageUrl,
          ingredients: ['bun', 'cheese', 'bacon', 'beef', 'tomato', 'lettuce', 'onion', 'mayo', 'sauce', 'ketchup', 'mustard'],
          menuCategoryId: burgersCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });

    const friesCategory = await tx.menuCategory.create({
      data: {
        name: 'French Fries',
        slug: createSlug('French Fries'),
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: 'Small Fries',
          slug: createSlug('Small Fries'),
          description: 'Small portion of fries',
          price: 7.0,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: friesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Medium Fries',
          slug: createSlug('Medium Fries'),
          description: 'Medium portion of fries',
          price: 10.0,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: friesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Large Fries',
          slug: createSlug('Large Fries'),
          description: 'Large portion of fries',
          price: 14.0,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: friesCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });

    const drinksCategory = await tx.menuCategory.create({
      data: {
        name: 'Drinks',
        slug: createSlug('Drinks'),
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: 'Coca-Cola',
          slug: createSlug('Coca-Cola'),
          description: 'Refreshing soda',
          price: 7.0,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Orange Juice',
          slug: createSlug('Orange Juice'),
          description: 'Fresh orange juice',
          price: 10.0,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Chocolate Milkshake',
          slug: createSlug('Chocolate Milkshake'),
          description: 'Creamy chocolate shake',
          price: 14.0,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });

    const dessertsCategory = await tx.menuCategory.create({
      data: {
        name: 'Desserts',
        slug: createSlug('Desserts'),
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: 'Ice Cream',
          slug: createSlug('Ice Cream'),
          description: 'Vanilla ice cream with chocolate syrup',
          price: 7.5,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: dessertsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Apple Pie',
          slug: createSlug('Apple Pie'),
          description: "Classic McDonald's dessert",
          price: 10.0,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: dessertsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: 'Chocolate Cake',
          slug: createSlug('Chocolate Cake'),
          description: 'Rich chocolate cake slice',
          price: 14.0,
          imageUrl: restaurant.coverImageUrl,
          ingredients: [],
          menuCategoryId: dessertsCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
