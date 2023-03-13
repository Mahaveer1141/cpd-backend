import app from "./app";
import config from "./config/configuration";

const PORT = config.server.PORT;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
