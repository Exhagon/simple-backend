import express from "express";
import userRoutes from "./routes/userRoutes";
import env, { loadConfig } from "../config/env"

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

const startServer = async () => {
  await loadConfig();

  const port = parseInt(env.PORT, 10);
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
};

startServer();
