import React, { useState } from "react";
import {
  deleteUnactiveEmployees,
  setActiveEmployees,
} from "../store/employeesReducer";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Radio from "./Radio";

//do refactor after passing real user data (firstName, lastName)
interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
}

const Employee: React.FC<IEmployee> = ({ id, firstName, lastName }) => {
  const [val, setValue] = useState<boolean>();
  const dispatch = useAppDispatch();

  const setEmployeeStatus = (status: boolean) => {
    setValue(status);
    if (status) {
      dispatch(setActiveEmployees(id));
      return;
    }
    dispatch(deleteUnactiveEmployees(id));
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
