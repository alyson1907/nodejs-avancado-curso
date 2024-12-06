import express from "express";
import restaurantRouter from "./routes/restaurant.routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", restaurantRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
