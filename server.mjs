import express from "express";
import "./loadEnvironment.mjs";
import "express-async-errors";
import gradesRoute from "./routes/grades.mjs"
import morgan from "morgan";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/grades", gradesRoute)


//student route for backwards compatibility
// res.get("/student/:id", async (req, res) => {
//     res.redirect("../learner/${req.params.id")
//   })
  
  // Global error handling
  app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occurred.");
  });
  
  app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}, DB started `);
  });