type EnvVars = {
    PORT: string;
    NODE_ENV: string;
    MONGODB_URI: string;
    [key: string]: string;
  };
  
  const env: EnvVars = {
    PORT: process.env.PORT || "3000",
    NODE_ENV: process.env.NODE_ENV || "development",
    MONGODB_URI: process.env.MONGODB_URI || ""
  };
  
  
  export default env;
  