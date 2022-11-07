import { Button, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { TaskList } from "../components/TaskList";
import { addtodo } from "./api/api";

export default function Alltask({ data }) {
  console.log(data);
  const [text, settext] = useState({});

  function onchange(e) {
    const { name, value } = e.target;
    settext({
      ...text,
      [name]: value,
    });
  }
  function addtask(e) {
    e.preventDefault();
    addtodo(text);
  }
  return (
    <div>
      <FormControl>
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
      </FormControl>
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
