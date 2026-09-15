/**
 * STARBUCKS MENU DIRECTORY - FUNCTIONALITY ENGINE
 * Dynamic catalog, live search, filtering, detail modal & accordion
 */

const menuData = [
  {
    id: 'sb-01',
    name: 'Caffè Latte',
    category: 'Hot Coffees',
    price: '$4.65',
    calories: '190 Cal',
    description: 'Rich, full-bodied espresso blended with steamed milk and a light layer of foam.',
    dietary: 'Vegetarian, Customizable Dairy',
    popular: true,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-02',
    name: 'Caramel Macchiato',
    category: 'Hot Coffees',
    price: '$5.25',
    calories: '250 Cal',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and drizzled with caramel.',
    dietary: 'Sweetened, Contains Dairy',
    popular: true,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-03',
    name: 'Vanilla Sweet Cream Cold Brew',
    category: 'Cold Brews',
    price: '$4.95',
    calories: '110 Cal',
    description: 'Slow-steeped Starbucks Cold Brew accented with vanilla and topped with delicate sweet cream.',
    dietary: 'Low Calorie, Cold Beverage',
    popular: true,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-04',
    name: 'Iced Brown Sugar Oatmilk Shaken Espresso',
    category: 'Cold Brews',
    price: '$5.75',
    calories: '120 Cal',
    description: 'Starbucks Blonde Espresso shaken with brown sugar and cinnamon, topped with oatmilk.',
    dietary: 'Vegan Friendly, Non-Dairy',
    popular: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-05',
    name: 'Caramel Ribbon Crunch Frappuccino®',
    category: 'Frappuccino®',
    price: '$5.95',
    calories: '470 Cal',
    description: 'Buttery caramel syrup blended with coffee, milk, ice, whipped cream, and caramel crunch topping.',
    dietary: 'Blended Treat, Sweet',
    popular: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-06',
    name: 'Iced Matcha Tea Latte',
    category: 'Iced Teas',
    price: '$4.95',
    calories: '200 Cal',
    description: 'Smooth and creamy sweetened matcha green tea served with milk over ice.',
    dietary: 'Antioxidant Rich, Vegetarian',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-07',
    name: 'Bacon, Gouda & Egg Sandwich',
    category: 'Breakfast',
    price: '$5.25',
    calories: '360 Cal',
    description: 'Sizzling bacon, aged Gouda cheese, and a parmesan egg frittata served on an artisan roll.',
    dietary: 'High Protein, Warm Food',
    popular: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-08',
    name: 'Butter Croissant',
    category: 'Bakery',
    price: '$3.45',
    calories: '260 Cal',
    description: 'Classic flaky French pastry baked with 100% real butter for a soft, layered texture.',
    dietary: 'Bakery Item, Vegetarian',
    popular: false,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-09',
    name: 'Cappuccino',
    category: 'Hot Coffees',
    price: '$4.45',
    calories: '120 Cal',
    description: 'Bold espresso topped with a deep layer of foamed milk for a light, airy texture.',
    dietary: 'Vegetarian, Customizable Dairy',
    popular: false,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-10',
    name: 'Caffe Americano',
    category: 'Hot Coffees',
    price: '$3.65',
    calories: '15 Cal',
    description: 'Espresso shots topped with hot water for a light layer of crema and a rich, smooth taste.',
    dietary: 'Low Calorie, Dairy-Free',
    popular: false,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-11',
    name: 'Pike Place Roast',
    category: 'Hot Coffees',
    price: '$3.25',
    calories: '5 Cal',
    description: 'A smooth, well-rounded blend of Latin American coffees with rich flavor and subtle notes of cocoa.',
    dietary: 'Low Calorie, Vegan Friendly',
    popular: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-12',
    name: 'Caffe Mocha',
    category: 'Hot Coffees',
    price: '$5.05',
    calories: '290 Cal',
    description: 'Espresso with bittersweet mocha sauce, steamed milk, and a topping of sweetened whipped cream.',
    dietary: 'Sweetened, Contains Dairy',
    popular: false,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-13',
    name: 'Classic Cold Brew',
    category: 'Cold Brews',
    price: '$4.25',
    calories: '5 Cal',
    description: 'Slow-steeped for 20 hours and served over ice, naturally smooth and slightly sweet.',
    dietary: 'Low Calorie, Vegan Friendly',
    popular: false,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-14',
    name: 'Nitro Cold Brew',
    category: 'Cold Brews',
    price: '$4.75',
    calories: '5 Cal',
    description: 'Cold Brew infused with nitrogen for a naturally sweet flavor and a cascading, velvety texture.',
    dietary: 'Low Calorie, Vegan Friendly',
    popular: false,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-15',
    name: 'Strawberry Acai Starbucks Refreshers',
    category: 'Cold Brews',
    price: '$4.65',
    calories: '90 Cal',
    description: 'Sweet strawberry flavors combined with real fruit pieces and a hint of acai.',
    dietary: 'Caffeinated, Fruit-Based',
    popular: true,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-16',
    name: 'Mango Dragonfruit Starbucks Refreshers',
    category: 'Cold Brews',
    price: '$4.65',
    calories: '100 Cal',
    description: 'Sweet mango and dragonfruit flavors shaken with real diced dragonfruit pieces.',
    dietary: 'Caffeinated, Fruit-Based',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-17',
    name: 'Java Chip Frappuccino®',
    category: 'Frappuccino®',
    price: '$5.85',
    calories: '440 Cal',
    description: 'Mocha sauce and coffee blended with milk, ice, and chocolate chips, topped with whipped cream.',
    dietary: 'Blended Treat, Sweet',
    popular: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-18',
    name: 'Vanilla Bean Creme Frappuccino®',
    category: 'Frappuccino®',
    price: '$5.45',
    calories: '420 Cal',
    description: 'A caffeine-free blend of milk, ice, and vanilla bean powder, topped with whipped cream.',
    dietary: 'Caffeine-Free, Vegetarian',
    popular: false,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-19',
    name: 'Strawberry Creme Frappuccino®',
    category: 'Frappuccino®',
    price: '$5.45',
    calories: '380 Cal',
    description: 'Sweet strawberry flavor blended with milk and ice, topped with whipped cream.',
    dietary: 'Caffeine-Free, Vegetarian',
    popular: false,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-20',
    name: 'Iced Passion Tango Tea',
    category: 'Iced Teas',
    price: '$3.95',
    calories: '70 Cal',
    description: 'A hand-shaken herbal tea infusion with hibiscus, lemongrass, and apple notes, served over ice.',
    dietary: 'Caffeine-Free, Vegan Friendly',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-21',
    name: 'Iced Chai Tea Latte',
    category: 'Iced Teas',
    price: '$4.75',
    calories: '190 Cal',
    description: 'Black tea infused with cinnamon, clove, and other warming spices, combined with milk over ice.',
    dietary: 'Vegetarian, Customizable Dairy',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-22',
    name: 'Sausage, Cheddar & Egg Sandwich',
    category: 'Breakfast',
    price: '$5.25',
    calories: '480 Cal',
    description: 'A savory pork sausage patty with aged cheddar cheese and egg on an English muffin.',
    dietary: 'High Protein, Warm Food',
    popular: false,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-23',
    name: 'Bacon & Gouda Egg Bites',
    category: 'Breakfast',
    price: '$4.75',
    calories: '300 Cal',
    description: 'Sous-vide cooked eggs blended with Monterey Jack and cottage cheese, with bacon.',
    dietary: 'High Protein, Warm Food',
    popular: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-24',
    name: 'Classic Oatmeal',
    category: 'Breakfast',
    price: '$4.25',
    calories: '160 Cal',
    description: 'A warm blend of whole-grain oats, served plain or with brown sugar and dried fruit toppings.',
    dietary: 'Vegetarian, Customizable',
    popular: false,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-25',
    name: 'Blueberry Muffin',
    category: 'Bakery',
    price: '$3.65',
    calories: '350 Cal',
    description: 'A moist muffin packed with blueberries and topped with a sweet, crumbly streusel.',
    dietary: 'Bakery Item, Vegetarian',
    popular: false,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-26',
    name: 'Cheese Danish',
    category: 'Bakery',
    price: '$3.75',
    calories: '270 Cal',
    description: 'Flaky pastry filled with a sweet, creamy cheese filling.',
    dietary: 'Bakery Item, Vegetarian',
    popular: false,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-27',
    name: 'Blonde Vanilla Latte',
    category: 'Hot Coffees',
    price: '$4.85',
    calories: '250 Cal',
    description: 'Starbucks Blonde Espresso combined with vanilla syrup and steamed milk for a smooth, mellow taste.',
    dietary: 'Vegetarian, Customizable Dairy',
    popular: false,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-28',
    name: 'Cinnamon Dolce Latte',
    category: 'Hot Coffees',
    price: '$5.15',
    calories: '260 Cal',
    description: 'Espresso and steamed milk flavored with cinnamon dolce syrup, topped with whipped cream.',
    dietary: 'Sweetened, Contains Dairy',
    popular: false,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-29',
    name: 'Flat White',
    category: 'Hot Coffees',
    price: '$4.95',
    calories: '170 Cal',
    description: 'Ristretto espresso shots combined with steamed whole milk for a rich, velvety-smooth texture.',
    dietary: 'Vegetarian, Contains Dairy',
    popular: true,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-30',
    name: 'White Chocolate Mocha',
    category: 'Hot Coffees',
    price: '$5.35',
    calories: '370 Cal',
    description: 'Espresso combined with white chocolate sauce and steamed milk, topped with whipped cream.',
    dietary: 'Sweetened, Contains Dairy',
    popular: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-31',
    name: 'Iced Caramel Macchiato',
    category: 'Cold Brews',
    price: '$5.35',
    calories: '240 Cal',
    description: 'Freshly steamed milk with vanilla syrup, marked with espresso and caramel drizzle, served over ice.',
    dietary: 'Sweetened, Contains Dairy',
    popular: true,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-32',
    name: 'Iced Blonde Vanilla Latte',
    category: 'Cold Brews',
    price: '$4.95',
    calories: '230 Cal',
    description: 'Blonde Espresso, vanilla syrup, and milk poured over ice for a smooth, refreshing sip.',
    dietary: 'Vegetarian, Customizable Dairy',
    popular: false,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-33',
    name: 'Salted Caramel Cream Cold Brew',
    category: 'Cold Brews',
    price: '$5.15',
    calories: '160 Cal',
    description: 'Cold Brew topped with a salted caramel cream cold foam for a sweet-and-salty finish.',
    dietary: 'Contains Dairy, Cold Beverage',
    popular: false,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-34',
    name: 'Pink Drink (Strawberry Acai Refresher)',
    category: 'Refreshers',
    price: '$5.25',
    calories: '140 Cal',
    description: 'Strawberry Acai Refresher made with coconutmilk instead of water, topped with diced strawberries.',
    dietary: 'Vegan Friendly, Fruit-Based',
    popular: true,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-35',
    name: 'Mango Dragonfruit Lemonade Refreshers',
    category: 'Refreshers',
    price: '$4.85',
    calories: '110 Cal',
    description: 'Mango Dragonfruit Refresher shaken with lemonade instead of water for extra tang.',
    dietary: 'Caffeinated, Fruit-Based',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-36',
    name: 'Kiwi Starfruit Refreshers',
    category: 'Refreshers',
    price: '$4.65',
    calories: '80 Cal',
    description: 'A caffeine-free blend of kiwi, starfruit, and green coffee extract flavors with real fruit pieces.',
    dietary: 'Caffeine-Free, Vegan Friendly',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-37',
    name: 'Mocha Frappuccino®',
    category: 'Frappuccino®',
    price: '$5.65',
    calories: '400 Cal',
    description: 'Coffee and mocha sauce blended with milk and ice, topped with whipped cream.',
    dietary: 'Blended Treat, Sweet',
    popular: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-38',
    name: 'Caramel Frappuccino®',
    category: 'Frappuccino®',
    price: '$5.65',
    calories: '380 Cal',
    description: 'Coffee blended with caramel syrup, milk, and ice, topped with whipped cream and caramel drizzle.',
    dietary: 'Blended Treat, Sweet',
    popular: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-39',
    name: 'Chocolate Cookie Crumble Frappuccino®',
    category: 'Frappuccino®',
    price: '$5.95',
    calories: '470 Cal',
    description: 'A chocolatey blend of chocolate cookie crumbles, milk, and ice, topped with whipped cream.',
    dietary: 'Blended Treat, Sweet',
    popular: false,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-40',
    name: 'Matcha Green Tea Frappuccino®',
    category: 'Frappuccino®',
    price: '$5.75',
    calories: '360 Cal',
    description: 'Sweetened matcha green tea blended with milk and ice, topped with whipped cream.',
    dietary: 'Vegetarian, Blended Treat',
    popular: false,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-41',
    name: 'Green Tea Latte',
    category: 'Hot Teas',
    price: '$4.85',
    calories: '240 Cal',
    description: 'Sweetened matcha green tea combined with steamed milk for a smooth, earthy latte.',
    dietary: 'Vegetarian, Contains Dairy',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-42',
    name: 'Chai Tea Latte',
    category: 'Hot Teas',
    price: '$4.65',
    calories: '240 Cal',
    description: 'Black tea infused with cinnamon, clove, and other spices, combined with steamed milk.',
    dietary: 'Vegetarian, Contains Dairy',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-43',
    name: 'London Fog Tea Latte',
    category: 'Hot Teas',
    price: '$4.65',
    calories: '190 Cal',
    description: 'Earl Grey tea combined with vanilla syrup and steamed milk for a fragrant, comforting sip.',
    dietary: 'Vegetarian, Contains Dairy',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-44',
    name: 'Turkey Bacon, Cheddar & Egg White Sandwich',
    category: 'Breakfast',
    price: '$5.45',
    calories: '230 Cal',
    description: 'Egg whites with turkey bacon and reduced-fat cheddar on a multigrain thin roll.',
    dietary: 'High Protein, Reduced Fat',
    popular: false,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-45',
    name: 'Spinach, Feta & Egg White Wrap',
    category: 'Breakfast',
    price: '$4.95',
    calories: '290 Cal',
    description: 'Cage-free egg whites with baby spinach and feta cheese wrapped in a whole-wheat tortilla.',
    dietary: 'Vegetarian, High Protein',
    popular: false,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-46',
    name: 'Double-Smoked Bacon, Cheddar & Egg Sandwich',
    category: 'Breakfast',
    price: '$5.65',
    calories: '500 Cal',
    description: 'Double-smoked bacon, aged cheddar, and a cage-free fried egg on an artisan roll.',
    dietary: 'High Protein, Warm Food',
    popular: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-47',
    name: 'Chocolate Croissant',
    category: 'Bakery',
    price: '$3.95',
    calories: '340 Cal',
    description: 'A butter croissant filled with rich, dark chocolate batons.',
    dietary: 'Bakery Item, Vegetarian',
    popular: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-48',
    name: 'Banana Nut Bread',
    category: 'Bakery',
    price: '$3.65',
    calories: '420 Cal',
    description: 'A moist quick bread packed with ripe bananas and crunchy walnuts.',
    dietary: 'Bakery Item, Vegetarian',
    popular: false,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-49',
    name: 'Birthday Cake Pop',
    category: 'Bakery',
    price: '$2.75',
    calories: '150 Cal',
    description: 'Vanilla cake dipped in colorful confetti-sprinkled pink icing on a stick.',
    dietary: 'Bakery Item, Vegetarian',
    popular: false,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-50',
    name: 'Chicken & Quinoa Protein Bowl',
    category: 'Lunch',
    price: '$7.45',
    calories: '390 Cal',
    description: 'Grilled chicken, black beans, and quinoa with a lime vinaigrette and pepitas.',
    dietary: 'High Protein, Gluten-Free',
    popular: false,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-51',
    name: 'Eggs & Cheddar Protein Box',
    category: 'Lunch',
    price: '$6.95',
    calories: '470 Cal',
    description: 'Hard-boiled eggs, cheddar cheese, multigrain muesli bread, and grapes.',
    dietary: 'High Protein, Vegetarian',
    popular: false,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sb-52',
    name: 'Turkey Pesto Panini',
    category: 'Lunch',
    price: '$7.25',
    calories: '480 Cal',
    description: 'Roasted turkey, mozzarella, and basil pesto on toasted focaccia bread.',
    dietary: 'High Protein, Warm Food',
    popular: false,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  }
];

const categories = ['All', 'Hot Coffees', 'Cold Brews', 'Frappuccino®', 'Refreshers', 'Hot Teas', 'Iced Teas', 'Breakfast', 'Bakery', 'Lunch'];

// State
let currentCategory = 'All';
let searchQuery = '';

// DOM Elements
const productGrid = document.getElementById('productGrid');
const popularGrid = document.getElementById('popularGrid');
const categoryContainer = document.getElementById('categoryContainer');
const menuSearch = document.getElementById('menuSearch');
const clearSearchBtn = document.getElementById('clearSearch');
const resultsInfo = document.getElementById('resultsInfo');
const resultsCount = document.getElementById('resultsCount');
const resetFilterBtn = document.getElementById('resetFilterBtn');
const emptyState = document.getElementById('emptyState');
const emptyResetBtn = document.getElementById('emptyResetBtn');

// Modal Elements
const productModal = document.getElementById('productModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImg = document.getElementById('modalImg');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalCalories = document.getElementById('modalCalories');
const modalDesc = document.getElementById('modalDesc');
const modalDietary = document.getElementById('modalDietary');

// Navigation & Drawer Elements
const header = document.getElementById('header');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const closeDrawerBtn = document.getElementById('closeDrawer');
const backToTopBtn = document.getElementById('backToTop');
const searchToggleBtn = document.getElementById('searchToggle');

// Initialize
// Guarded so this script can run safely on every page of the site, even
// pages that don't include the full interactive catalog markup.
document.addEventListener('DOMContentLoaded', () => {
  if (productGrid && categoryContainer) {
    renderCategories();
    renderProducts();
  }
  if (popularGrid) {
    renderPopularProducts();
  }
  setupEventListeners();
});

// Category Rendering
function renderCategories() {
  categoryContainer.innerHTML = categories.map(cat => `
    <button class="cat-pill ${cat === currentCategory ? 'active' : ''}" data-category="${cat}">
      ${cat}
    </button>
  `).join('');
}

// Product Rendering
function renderProducts() {
  const filtered = menuData.filter(item => {
    const matchesCategory = currentCategory === 'All' || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle count and state
  if (searchQuery !== '' || currentCategory !== 'All') {
    resultsInfo.classList.remove('hidden');
    resultsCount.textContent = `Showing ${filtered.length} item(s)`;
  } else {
    resultsInfo.classList.add('hidden');
  }

  if (filtered.length === 0) {
    productGrid.classList.add('hidden');
    emptyState.classList.remove('hidden');
  } else {
    productGrid.classList.remove('hidden');
    emptyState.classList.add('hidden');

    productGrid.innerHTML = filtered.map(item => `
      <div class="product-card">
        <div class="card-img-wrapper">
          ${item.popular ? `<span class="badge-popular">Popular</span>` : ''}
          <img src="${item.image}" alt="Starbucks ${item.name}" loading="lazy">
        </div>
        <div class="card-content">
          <div class="card-meta">
            <span>${item.category}</span>
            <span>${item.calories}</span>
          </div>
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.description}</p>
          <div class="card-footer">
            <span class="card-price">${item.price}</span>
            <button class="btn-card" onclick="openProductModal('${item.id}')">View Details</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Render Popular Section
function renderPopularProducts() {
  const popularItems = menuData.filter(item => item.popular).slice(0, 3);
  popularGrid.innerHTML = popularItems.map(item => `
    <div class="product-card">
      <div class="card-img-wrapper">
        <span class="badge-popular">Top Favorite</span>
        <img src="${item.image}" alt="Starbucks ${item.name}" loading="lazy">
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>${item.category}</span>
          <span>${item.calories}</span>
        </div>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.description}</p>
        <div class="card-footer">
          <span class="card-price">${item.price}</span>
          <button class="btn-card" onclick="openProductModal('${item.id}')">View Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Open Detail Modal
window.openProductModal = function(id) {
  const item = menuData.find(p => p.id === id);
  if (!item) return;

  modalImg.src = item.image;
  modalImg.alt = item.name;
  modalCategory.textContent = item.category;
  modalTitle.textContent = item.name;
  modalPrice.textContent = item.price;
  modalCalories.textContent = item.calories;
  modalDesc.textContent = item.description;
  modalDietary.textContent = item.dietary;

  productModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

// Close Detail Modal
function closeModal() {
  productModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Event Listeners
// Every block below is guarded with an element existence check so this one
// script.js file can be shared across the homepage AND every category /
// guide / FAQ page, even though those simpler pages don't include every
// piece of markup (search box, modal, category pills, etc).
function setupEventListeners() {
  // Category Filtering
  if (categoryContainer) {
    categoryContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('cat-pill')) {
        currentCategory = e.target.dataset.category;
        renderCategories();
        renderProducts();
      }
    });
  }

  // Search input
  if (menuSearch && clearSearchBtn) {
    menuSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      clearSearchBtn.classList.toggle('hidden', searchQuery === '');
      renderProducts();
    });

    clearSearchBtn.addEventListener('click', () => {
      menuSearch.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderProducts();
    });
  }

  // Reset Filters
  const resetAll = () => {
    currentCategory = 'All';
    searchQuery = '';
    if (menuSearch) menuSearch.value = '';
    if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
    renderCategories();
    renderProducts();
  };

  if (resetFilterBtn) resetFilterBtn.addEventListener('click', resetAll);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);

  // Modal Close Events
  if (modalCloseBtn && productModal) {
    modalCloseBtn.addEventListener('click', closeModal);
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !productModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // Mobile Drawer Events (present on every page)
  if (hamburgerBtn && mobileDrawer && drawerOverlay && closeDrawerBtn) {
    const toggleDrawer = (open) => {
      mobileDrawer.classList.toggle('open', open);
      drawerOverlay.classList.toggle('open', open);
    };

    hamburgerBtn.addEventListener('click', () => toggleDrawer(true));
    closeDrawerBtn.addEventListener('click', () => toggleDrawer(false));
    drawerOverlay.addEventListener('click', () => toggleDrawer(false));

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });
  }

  // Search Icon focus (homepage only)
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', () => {
      const catalogSection = document.getElementById('menu-catalog');
      if (catalogSection) catalogSection.scrollIntoView({ behavior: 'smooth' });
      if (menuSearch) menuSearch.focus();
    });
  }

  // Accordion Toggle (homepage + FAQ page)
  document.querySelectorAll('.accordion-header').forEach(headerBtn => {
    headerBtn.addEventListener('click', () => {
      const item = headerBtn.parentElement;
      const isOpen = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  // Scroll Behavior (present on every page)
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}