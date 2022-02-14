import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234"),
    isAdmin: true,
  },
  {
    name: "Rajat",
    email: "rajat@example.com",
    password: bcrypt.hashSync("1234"),
  },
  {
    name: "Anil",
    email: "anil@example.com",
    password: bcrypt.hashSync("1234"),
  },
];

export default users;
