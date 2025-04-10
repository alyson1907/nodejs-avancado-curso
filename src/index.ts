import "dotenv/config";
import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import errorHandler from "./error/error-handler";
import orderRouter from "./routes/order.routes";
import restaurantRouter from "./routes/restaurant.routes";

const app = express();
const port = 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Restaurant Orders API",
      version: "1.0.0",
      description: "Documentação da API do restaurante",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerDoc = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/api", orderRouter);
app.use("/api", restaurantRouter);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
