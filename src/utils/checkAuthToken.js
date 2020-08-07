import jwt from "jsonwebtoken";

const token = localStorage.getItem("token");

let checkToken = () => {};

if (token) {
  checkToken = () => {
    try {
      const response = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}

export default checkToken;
