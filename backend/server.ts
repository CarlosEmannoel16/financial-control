import express from "express";

import { graphqlHTTP } from "express-graphql";
import { schemas } from "./src/presentation/graphql/schemas";
import { mongoConnection } from "./src/loaders/mongoConnection";
import { RedisClient } from "./src/loaders/redisConnection";
import dotenv from "dotenv";
import { routes } from "./routes";
import { EventHandler } from "./src/data/eventsHandler/EventHandler";
import resolvers from "./src/presentation/graphql/resolvers";
const app = express();

dotenv.config();

mongoConnection().then(() => {
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schemas,
      rootValue: resolvers,
      graphiql: true,
    })
  );
  RedisClient.getInstance();
  new EventHandler();
  routes(app);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
