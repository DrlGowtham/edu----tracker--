import Course from "../models/courseModel.js";

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

export const addCourse = async (req, res) => {
  const { title, description, progress } = req.body;
  const course = new Course({ title, description, progress });
  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
};

export const updateCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    course.title = req.body.title || course.title;
    course.description = req.body.description || course.description;
    course.progress = req.body.progress ?? course.progress;
    const updated = await course.save();
    res.json(updated);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
};

export const deleteCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    await course.deleteOne();
    res.json({ message: "Course deleted" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
};
