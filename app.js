import express from 'express';
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./Modules/routes.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);
