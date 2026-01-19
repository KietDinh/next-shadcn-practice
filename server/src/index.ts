import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet"; // Set HTTP headers to protect against vulnerabilities (XSS and clickjacking)
import morgan from "morgan"; // Logs HTTP requests to the console for monitoring and debugging

/* ROUTE IMPORT */

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // Allow resources (images, scripts) to be loaded from different origins like CDNs (different from cors which is for API requests)
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS for all origins

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

/* SERVER */
const port = Number(process.env.PORT) || 3002;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
