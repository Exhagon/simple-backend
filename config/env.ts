import { config } from "dotenv";
import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";

config();

type EnvVars = {
  PORT: string;
  NODE_ENV: string;
  [key: string]: string;
};

let env: EnvVars = {
  PORT: process.env.PORT || "3000",
  NODE_ENV: process.env.NODE_ENV || "development"
};

export const loadConfig = async () => {
  if (env.NODE_ENV === "production" && process.env.KEYVAULT_NAME) {
    const vaultName = process.env.KEYVAULT_NAME;
    const url = `https://${vaultName}.vault.azure.net`;
    const credential = new DefaultAzureCredential();
    const client = new SecretClient(url, credential);

    try {
      const keys = ["PORT", "NODE_ENV"]; // agrega aquí más claves según necesites
      for (const key of keys) {
        const secret = await client.getSecret(key);
        env[key] = secret.value || "";
      }
    } catch (err) {
      console.error("Error cargando secretos desde KeyVault:", err);
    }
  }
};

export default env;
