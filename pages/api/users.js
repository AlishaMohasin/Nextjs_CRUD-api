import dbconnect from "../../database/db";
import User from "../../database/Schema";

dbconnect().catch((err) => console.log(err));
export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const user = await User.find({}, { name: 1, email: 1 });

        return res.status(200).json(user);
      } catch (e) {
        return res.status(400).json({ msg: e.message });
      }

    case "POST":
      try {
        const user = new User(body);
        await user.save();
        return res.status(200).send("user created");
      } catch (e) {
        return res.status(400).json({ msg: e.message });
          }
          default:
            return res.status(400).json("This method is not supported")
  }

  // const create = new User({ name: 'John' })
  // create.save().then(()=>res.status(200).json(create))
  // res.status(200).json([{ name: 'John Doe' },{ name: 'John' }])
}
