import React, { useState, useEffect } from "react";
import {
  deleteUnactiveEmployees,
  setActiveEmployees,
} from "../store/employeesReducer";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Radio from "./Radio";

interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
}

const Employee: React.FC<IEmployee> = ({ id, firstName, lastName }) => {
  const [val, setValue] = useState<boolean>(false);

  useEffect(() => {
    const keys = Object.entries(localStorage);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i][0] === id) {
        setEmployeeStatus(true);
        console.log(val);
        return;
      }
      setValue(false);
    }
  }, []);

  const dispatch = useAppDispatch();

  const setEmployeeStatus = (status: boolean) => {
    setValue(status);
    if (status) {
      localStorage.setItem(`${id}`, id);
      dispatch(setActiveEmployees(id));
      return;
    }
    dispatch(deleteUnactiveEmployees(id));
    localStorage.removeItem(id);
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
        data-testid={"notactive"}
        htmlFor={"notActive"}
        label={"not active"}
        id={`#${firstName}${lastName}`}
        name={`#${firstName}${lastName}`}
        callback={setEmployeeStatus}
        value={"false"}
        checked={val ? false : true}
      />
      <Radio
        data-testid={"active"}
        htmlFor={"active"}
        label={"active"}
        id={`#${firstName}${lastName}`}
        name={`#${firstName}${lastName}`}
        callback={setEmployeeStatus}
        value={"true"}
        checked={val}
      />
    </div>
  );
};

export default Employee;
