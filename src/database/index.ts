import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

// Configuração para obter __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega o .env do diretório raiz do projeto
dotenv.config({ path: path.resolve(__dirname, '../.env') });

class MongoDBConnection {
  private readonly mongoUrl: string;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL not Defined .env");
    }
    this.mongoUrl = process.env.DATABASE_URL;
    console.log(`Trying connect: ${this.mongoUrl}`);
  }

  async execute(): Promise<void> {
    try {
      await mongoose.connect(this.mongoUrl, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      console.log("✅ MongoDB connected!");
    } catch (err: any) {
      console.error("❌ Error connection:", err.message);
      process.exit(1);
    }
  }
}

export default new MongoDBConnection();