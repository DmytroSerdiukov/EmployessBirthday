import React, { useState } from "react";
import Radio from "./Radio";

//do refactor after passing real user data (firstName, lastName)

const Employee: React.FC = () => {
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
        Dmytro Serdiukov
      </h3>
      <Radio
        htmlFor={"notActive"}
        label={"not active"}
        id={"notActive"}
        callback={setEmployeeStatus}
        value={"false"}
        defaultChecked
      />
      <Radio
        htmlFor={"active"}
        label={"active"}
        id={"active"}
        callback={setEmployeeStatus}
        value={"true"}
      />
    </div>
  );
};

export default Employee;
