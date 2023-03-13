import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI || "";

const PORT = process.env.PORT || 5000;

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "secretKey";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "secretKey";

const CLOUD_NAME = process.env.CLOUD_NAME || "";
const API_KEY = process.env.API_KEY || "";
const API_SECRET = process.env.API_SECRET || "";

const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD || "";

export default {
  server: {
    PORT,
  },
  mongo: {
    MONGO_URI,
  },
  token: {
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
  },
  cloudinary: {
    CLOUD_NAME,
    API_KEY,
    API_SECRET,
  },
  email: {
    GMAIL_PASSWORD,
  },
};
