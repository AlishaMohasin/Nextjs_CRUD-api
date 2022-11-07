import dbconnect from "../../database/db";
import Task from "../../database/Model/TaskSchema";

dbconnect().catch((err) => console.log(err));
export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const task = await Task.find();

        return res.status(200).json(task);
      } catch (e) {
        return res.status(400).json({ msg: e.message });
      }

    case "POST":
      try {
        const task = new Task(body);
        const newtask = await task.save();
        return res.status(200).json(newtask);
      } catch (e) {
        return res.status(400).json({ msg: e.message });
          }
          default:
            return res.status(400).json("This method is not supported")
  }
}
