import express from "express";
import userRoutes from "./routes/userRoutes";
import env, { loadConfig } from "../config/env";
import { connectToDatabase } from "../config/database";

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

const startServer = async () => {
  await loadConfig();
  await connectToDatabase();

  const port = parseInt(env.PORT || "3000", 10);

  app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
  });
};

startServer();
