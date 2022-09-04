import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeBirthdays from "./components/EmployeeBirthdays";
import Employees from "./components/Employees";
import {
  fetchEmployees,
  setActiveEmployees,
  setEmployees,
} from "./store/employeesReducer";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const [isFetching, setFetching] = useState(false);
  const dispatch = useAppDispatch();
  let employees = useAppSelector((state) => state.employees.employees);
  console.log(employees);

  // const getAndSetStorageKeys = () => {
  //   const keys = Object.entries(localStorage);
  //   console.log(keys);
  //   for (let i = 0; i < keys.length; i++) {
  //     console.log(keys[0][i]);
  //     // dispatch(setActiveEmployees(keys[i][0]));
  //   }
  // };

  useEffect(() => {
    setFetching(true);
    dispatch(fetchEmployees());
    // getAndSetStorageKeys();
    setFetching(false);
  }, []);

  return (
    <>
      {isFetching ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <h1 style={{ marginLeft: 100 }}>Employees</h1>
          <div style={{ display: "flex" }}>
            <Employees employees={employees} />
            <EmployeeBirthdays />
          </div>
        </>
      )}
    </>
  );
}

export default App;
