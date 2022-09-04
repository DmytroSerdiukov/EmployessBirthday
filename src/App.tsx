import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeBirthdays from "./components/EmployeeBirthdays";
import Employees from "./components/Employees";
import { fetchEmployees, setEmployees } from "./store/employeesReducer";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const [isFetching, setFetching] = useState(false);
  const dispatch = useAppDispatch();
  let employees = useAppSelector((state) => state.employees.employees);
  console.log(employees);

  useEffect(() => {
    setFetching(true);
    dispatch(fetchEmployees());
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
