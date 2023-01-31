import app from "./app";
import config from "./config";

const PORT = config.server.PORT;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
