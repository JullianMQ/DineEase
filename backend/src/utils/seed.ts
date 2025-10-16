import { db } from "./db.js";

const menuData = [
  {
    name: "Garlic Parmesan Fries",
    description: "Crispy fries tossed in garlic butter and Parmesan cheese.",
    price: 89.0,
    image_url: "/images/garlic-parmesan-fries.jpg",
    category: "Appetizer",
    available: true,
  },
  {
    name: "Caesar Salad",
    description:
      "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan.",
    price: 120.0,
    image_url: "/images/caesar-salad.jpg",
    category: "Appetizer",
    available: true,
  },
  {
    name: "Mozzarella Sticks",
    description: "Golden fried mozzarella served with marinara dipping sauce.",
    price: 95.0,
    image_url: "/images/mozzarella-sticks.jpg",
    category: "Appetizer",
    available: false,
  },
  {
    name: "Classic Burger",
    description:
      "Juicy beef patty with lettuce, tomato, and melted cheese on a brioche bun.",
    price: 159.0,
    image_url: "/images/classic-burger.jpg",
    category: "Main Course",
    available: true,
  },
  {
    name: "Grilled Chicken Alfredo",
    description:
      "Creamy pasta topped with grilled chicken and Parmesan cheese.",
    price: 189.0,
    image_url: "/images/chicken-alfredo.jpg",
    category: "Main Course",
    available: true,
  },
  {
    name: "Beef Steak with Mashed Potatoes",
    description:
      "Tender beef steak served with creamy mashed potatoes and gravy.",
    price: 249.0,
    image_url: "/images/beef-steak.jpg",
    category: "Main Course",
    available: false,
  },
  {
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
    price: 110.0,
    image_url: "/images/chocolate-lava-cake.jpg",
    category: "Dessert",
    available: true,
  },
  {
    name: "Classic Cheesecake",
    description:
      "Creamy New York-style cheesecake with a graham cracker crust.",
    price: 125.0,
    image_url: "/images/cheesecake.jpg",
    category: "Dessert",
    available: true,
  },
  {
    name: "Iced Caramel Latte",
    description:
      "Freshly brewed espresso with milk and caramel syrup served over ice.",
    price: 99.0,
    image_url: "/images/iced-caramel-latte.jpg",
    category: "Beverage",
    available: true,
  },
  {
    name: "Fresh Lemon Iced Tea",
    description: "Refreshing brewed tea with lemon slices and ice.",
    price: 79.0,
    image_url: "/images/lemon-iced-tea.jpg",
    category: "Beverage",
    available: true,
  },
];

async function seedMenu() {
  try {
    const menuCollection = db.collection("menu");
    await menuCollection.deleteMany({});
    console.log("Old menu data cleared.");

    const result = await menuCollection.insertMany(menuData);
    console.log(`${result.insertedCount} menu items inserted successfully.`);
  } catch (err) {
    console.error("Error seeding menu data:", err);
  }
}

const reservations = [
  {
    reservee_name: "John Doe",
    email: "john@example.com",
    seat_num: 2,
    date: new Date("2025-10-18"),
    time: "18:30",
    status: "Pending",
  },
  {
    reservee_name: "Jane Smith",
    email: "jane.smith@example.com",
    seat_num: 4,
    date: new Date("2025-10-19"),
    time: "19:00",
    status: "Confirmed",
  },
  {
    reservee_name: "Carlos Reyes",
    email: "carlos.reyes@example.com",
    seat_num: 3,
    date: new Date("2025-10-20"),
    time: "12:00",
    status: "Pending",
  },
  {
    reservee_name: "Mia Lopez",
    email: "mia.lopez@example.com",
    seat_num: 5,
    date: new Date("2025-10-21"),
    time: "18:00",
    status: "Cancelled",
  },
  {
    reservee_name: "Alex Tan",
    email: "alex.tan@example.com",
    seat_num: 2,
    date: new Date("2025-10-22"),
    time: "20:30",
    status: "Confirmed",
  },
  {
    reservee_name: "Ella Santos",
    email: "ella.santos@example.com",
    seat_num: 6,
    date: new Date("2025-10-23"),
    time: "17:45",
    status: "Pending",
  },
  {
    reservee_name: "Liam Cruz",
    email: "liam.cruz@example.com",
    seat_num: 2,
    date: new Date("2025-10-24"),
    time: "19:15",
    status: "Confirmed",
  },
  {
    reservee_name: "Hannah Kim",
    email: "hannah.kim@example.com",
    seat_num: 3,
    date: new Date("2025-10-25"),
    time: "12:30",
    status: "Pending",
  },
  {
    reservee_name: "Noah Garcia",
    email: "noah.garcia@example.com",
    seat_num: 4,
    date: new Date("2025-10-26"),
    time: "18:00",
    status: "Cancelled",
  },
  {
    reservee_name: "Sofia Lim",
    email: "sofia.lim@example.com",
    seat_num: 2,
    date: new Date("2025-10-27"),
    time: "19:00",
    status: "Confirmed",
  },
];

async function seedReservation() {
  try {
    const collection = db.collection("reservations");
    await collection.deleteMany({});
    console.log("Old reservations cleared.");

    const result = await collection.insertMany(reservations);
    console.log(`${result.insertedCount} reservations inserted successfully.`);
  } catch (err) {
    console.error("Error seeding reservation data:", err);
  }
}

export { seedMenu, seedReservation };
