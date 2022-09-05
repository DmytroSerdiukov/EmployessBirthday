import React, { useEffect, useState } from "react";
import Employees from "./components/Employees";
import EmployeeBirthdays from "./components/EmployeeBirthdays";
import { fetchEmployees } from "./store/employeesReducer";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const App: React.FC = () => {
  const [isFetching, setFetching] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  let employees = useAppSelector((state) => state.employees.employees);

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
};

export default App;
