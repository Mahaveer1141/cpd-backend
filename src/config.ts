import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI || "";

const PORT = process.env.PORT || 5000;

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "secretKey";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "secretKey";

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
};
