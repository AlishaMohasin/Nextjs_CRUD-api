import { Button } from "@chakra-ui/react";

export const TaskList = ({

  title,
 description
 
  
}) => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      
      <h1>
        {title}
          </h1>
          <h1>{ description}</h1>
   
      <Button bg="red" color="white" >
        Delete
      </Button>
    </div>
  );
};
