import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const { NODE_ENV } = process.env;
