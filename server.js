const app = require("./src/app");
const config = require("./src/config");
const connectDB = require("./src/config/db");

const startServer = async () => {
  try {
    if (config.MONGO_URI) {
      await connectDB();
    }

    app.listen(config.PORT, () => {
      console.log(`✅ Server running on port ${config.PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
