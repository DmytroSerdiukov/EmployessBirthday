import React, { useState } from "react";
import Radio from "./Radio";

//do refactor after passing real user data (firstName, lastName)
interface IEmployee {
  firstName: string;
  lastName: string;
}

const Employee: React.FC<IEmployee> = ({ firstName, lastName }) => {
  const [val, setValue] = useState<boolean>();

  const setEmployeeStatus = (status: boolean) => {
    setValue(status);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3
        style={{
          color: val === true ? "blue" : "black",
        }}
      >
        {firstName} {lastName}
      </h3>
      <Radio
        htmlFor={"notActive"}
        label={"not active"}
        id={`#${firstName}${lastName}`}
        name={`#${firstName}${lastName}`}
        callback={setEmployeeStatus}
        value={"false"}
        defaultChecked
      />
      <Radio
        htmlFor={"active"}
        label={"active"}
        id={`#${firstName}${lastName}`}
        name={`#${firstName}${lastName}`}
        callback={setEmployeeStatus}
        value={"true"}
      />
    </div>
  );
};

export default Employee;
