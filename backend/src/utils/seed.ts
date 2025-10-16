import { db } from "./db.js";

const menuData = [
  {
    name: "Garlic Parmesan Fries",
    description: "Crispy fries tossed in garlic butter and Parmesan cheese.",
    price: 89.0,
    image_url: "https://images.unsplash.com/photo-1736826201130-c8a3d4e1427c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    category: "Appetizer",
    available: true,
  },
  {
    name: "Caesar Salad",
    description:
      "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan.",
    price: 120.0,
    image_url: "https://images.unsplash.com/photo-1746211108786-ca20c8f80ecd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Appetizer",
    available: true,
  },
  {
    name: "Mozzarella Sticks",
    description: "Golden fried mozzarella served with marinara dipping sauce.",
    price: 95.0,
    image_url: "https://imgs.search.brave.com/yhoy7N2BzA2ttUQFGjZHY27_cnm8Eb5TeBMPPvWYtpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzkwLzA4LzQ3/LzM2MF9GXzE2OTAw/ODQ3NTdfam96T3Ay/emVVMUdRRGFDbXQx/UGlyT1VrakkzdHl1/QUguanBn",
    category: "Appetizer",
    available: false,
  },
  {
    name: "Classic Burger",
    description:
      "Juicy beef patty with lettuce, tomato, and melted cheese on a brioche bun.",
    price: 159.0,
    image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=999",
    category: "Main Course",
    available: true,
  },
  {
    name: "Grilled Chicken Alfredo",
    description:
      "Creamy pasta topped with grilled chicken and Parmesan cheese.",
    price: 189.0,
    image_url: "https://images.unsplash.com/photo-1645066803665-d16a79a21566?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Main Course",
    available: true,
  },
  {
    name: "Beef Steak with Mashed Potatoes",
    description:
      "Tender beef steak served with creamy mashed potatoes and gravy.",
    price: 249.0,
    image_url: "https://images.unsplash.com/photo-1732763898578-8374f3ba911a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Main Course",
    available: false,
  },
  {
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
    price: 110.0,
    image_url: "https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Dessert",
    available: true,
  },
  {
    name: "Classic Cheesecake",
    description:
      "Creamy New York-style cheesecake with a graham cracker crust.",
    price: 125.0,
    image_url: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
    category: "Dessert",
    available: true,
  },
  {
    name: "Iced Caramel Latte",
    description:
      "Freshly brewed espresso with milk and caramel syrup served over ice.",
    price: 99.0,
    image_url: "https://images.unsplash.com/photo-1579888071069-c107a6f79d82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Beverage",
    available: true,
  },
  {
    name: "Fresh Lemon Iced Tea",
    description: "Refreshing brewed tea with lemon slices and ice.",
    price: 79.0,
    image_url: "https://images.unsplash.com/photo-1656936632107-0bfa69ea06de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
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
