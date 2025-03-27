import mongoose from "mongoose";
import env from "./env";

export const connectToDatabase = async () => {
  const uri = env.MONGODB_URI;
  if (!uri) {
    throw new Error("No se ha definido la URI de MongoDB");
  }

  try {
    await mongoose.connect(uri);
    console.log("🟢 Conectado a MongoDB");
  } catch (error) {
    console.error("🔴 Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};
