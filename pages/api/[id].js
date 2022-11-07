import dbconnect from "../../database/db";
import Task from "../../database/Model/TaskSchema";

dbconnect().catch((err) => console.log(err));
export default async function (req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ msg: "task doesn't exist" });

        return res.status(200).json(task);
      } catch (e) {
        return res.status(400).json({ msg: e.message });
      }

    case "DELETE":
      try {
        const deletedtask = await Task.findByIdAndDelete(id);
        if (!deletedtask)
          return res.status(404).json({ msg: "task doesn't exist" });

        return res.status(200).json("successfully deleted");
      } catch (e) {
        return res.status(400).json({ msg: e.message });
          }
          case "PUT":
            try {
                const updatedtask = await Task.findByIdAndUpdate(id, body, {
                    new: true,
                    runValidator:true
              });
              if (!updatedtask)
                return res.status(404).json({ msg: "task doesn't exist" });
      
              return res.status(200).json(updatedtask);
            } catch (e) {
              return res.status(400).json({ msg: e.message });
          }
          case "PATCH":
            try {
                const updatedtask = await Task.findByIdAndUpdate(id, body, {
                    new: true,
                    runValidator:true
              });
              if (!updatedtask)
                return res.status(404).json({ msg: "task doesn't exist" });
      
              return res.status(200).json(updatedtask);
            } catch (e) {
              return res.status(400).json({ msg: e.message });
          }
      default:
          return res.status(400).json("This method is not supported")
  }
}
