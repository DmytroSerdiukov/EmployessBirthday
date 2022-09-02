import axios from "axios";
import React, { useEffect } from "react";
import Employee from "./components/Employee";

function App() {
  // useEffect(() => {
  //   const getUsersData = async () => {
  //     const result = await axios(`http://topdevsprojects.org:8081/tasks/users`);
  //     console.log(result.data);
  //   };
  //   getUsersData();
  // });
  return (
    <div>
      <Employee />
    </div>
  );
}

export default App;
