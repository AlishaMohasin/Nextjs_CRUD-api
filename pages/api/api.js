import axios from "axios";



export const addtodo = ({ data }) => {
  return axios.post("http://localhost:3000/api/task", {
    data
  });
};

export const toggle = ({ id, newstatus }) => {
  return axios.patch(`http://localhost:3000/api/${id}`, {
    status: newstatus
  });
};
export const update = ({ id, newstatus }) => {
    return axios.put(`http://localhost:3000/api/${id}`, {
      status: newstatus
    });
  };
export const Delete = (id) => {
  return axios.delete(`http://localhost:3000/api/${id}`);
};
