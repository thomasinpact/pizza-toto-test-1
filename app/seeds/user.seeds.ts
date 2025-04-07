import { User } from "~/models/user.server";

async function seedUsers() {
  await User.deleteMany({});
  
  const users = [
    { login: "admin@pizza.com", role: "admin" },
    { login: "mario@pizza.com", role: "client" },
    { login: "luigi@pizza.com", role: "client" }
  ];

  await User.insertMany(users);
  console.log("Users seeded successfully");
}

seedUsers().catch(console.error);
