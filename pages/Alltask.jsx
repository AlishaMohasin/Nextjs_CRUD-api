import { Button, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { TaskList } from "../components/TaskList";
import { addtodo } from "./api/api";
import { useRouter } from "next/router";

export default function Alltask({ data }) {
  console.log(data);
  const [newtask, settask] = useState({ title: "", description: "" });
  const { push } = useRouter();

  //   function onchange(e) {
  //     const { name, value } = e.target;
  //     settext({
  //       ...text,
  //       [name]: value,
  //     });
  //   }
  //   function addtask(e) {
  //     e.preventDefault();
  //     addtodo(text);
  //   }

  async function handlesubmit(e) {
    e.preventDefault();

    await createTask();
    await push("/");
  }
  async function createTask() {
    try {
      await fetch("http://localhost:3000/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newtask),
      });
    } catch (e) {
      console.log(e);
    }
  }
  function handlechange(e) {
    const { name, value } = e.target;
    settask({
      ...newtask,
      [name]: value,
    });
  }
  return (
    <div>
      {/* <FormControl>
        <Input
          name="title"
          value={text.title}
          placeholder="Type something"
          onChange={onchange}
        />
        <Input
          name="description"
          value={text.description}
          placeholder="Type something"
          onChange={onchange}
        />

        <Button onClick={addtask}>Add</Button>
      </FormControl> */}
      <form onSubmit={handlesubmit}>
        <input
          placeholder="title"
          name="title"
          value={newtask.title}
          onChange={handlechange}
        />
        <input
          placeholder="description"
          value={newtask.description}
          name="description"
          onChange={handlechange}
        />
        <input type={"submit"} value="Submit" />
      </form>
      {data.map((list) => (
        <TaskList title={list.title} description={list.description} />
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:3000/api/task").then((x) =>
    x.json()
  );
  return {
    props: { data },
  };
};
