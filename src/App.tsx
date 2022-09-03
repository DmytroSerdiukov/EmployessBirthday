import axios from "axios";
import React, { useEffect, useState } from "react";
import Employee from "./components/Employee";
import { fetchEmployees, setEmployees } from "./store/employeesReducer";
import { useAppDispatch, useAppSelector } from "./store/hooks";

interface EmployeesProps {
  employees: any[];
}

const Employees: React.FC<EmployeesProps> = ({ employees }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: 700,
        padding: 20,
      }}
    >
      {employees.map((el) => (
        <div key={el.letter} style={{ marginRight: 50 }}>
          <h2>{el.letter}</h2>
          <div>
            {el.items && el.items.length > 0 ? (
              el.items
                .slice()
                .sort((a: any, b: any) => {
                  if (a.firstName < b.firstName) {
                    return -1;
                  }
                  if (a.firstName > b.firstName) {
                    return 1;
                  }
                  return 0;
                })
                .map((item: any) => (
                  <Employee
                    key={item.id}
                    id={item.id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                  />
                ))
            ) : (
              <p>"No employees"</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const EmployeeBirthdays = () => {
  const birthdays = useAppSelector((state) => state.employees.activeEmployees);
  return (
    <ul>
      {birthdays.map((el) => (
        <li key={el.id}>
          {el.firstName} {el.lastName} {el.dob}
        </li>
      ))}
    </ul>
  );
};

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
      <h1 style={{ marginLeft: 100 }}>Employees</h1>
      <div style={{ display: "flex" }}>
        <Employees employees={employees} />
        <EmployeeBirthdays />
      </div>
    </>
  );
}

export default App;
