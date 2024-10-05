export const mongoConfig = {
  uri: process.env.MONGO_URI || "mongodb://localhost:27017",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
