import express from "express";
import { getCourses, addCourse, updateCourse, deleteCourse } from "../controllers/courseController.js";

const router = express.Router();

router.route("/")
  .get(getCourses)
  .post(addCourse);

router.route("/:id")
  .put(updateCourse)
  .delete(deleteCourse);

export default router;
