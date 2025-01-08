import "dotenv/config";
import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import restaurantRouter from "./routes/order.routes";

const app = express();
const port = 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Restaurant Orders API",
      version: "1.0.0",
      description: "Documentação da API do restaurante usando JSDoc",
    },
  },
  apis: ["./src/routes/*.ts"], // Localização dos arquivos com JSDoc
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", restaurantRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
