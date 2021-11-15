import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

export const PORT = process.env.PORT || 3000;
