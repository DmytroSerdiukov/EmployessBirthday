import { EmployeeSpace } from "../interfaces";
import Employee from "./Employee";

const Employees: React.FC<EmployeeSpace.EmployeesProps> = ({ employees }) => {
  return (
    <div>
      <h1 style={{ marginLeft: 100 }}>Employees</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: 700,
          padding: 20,
        }}
      >
        {employees.map((el: EmployeeSpace.IEmployeesArray) => (
          <div key={el.letter} style={{ marginRight: 50 }}>
            <h2>{el.letter}</h2>
            <div>
              {el.items && el.items.length > 0 ? (
                el.items
                  .slice()
                  .sort(
                    (
                      a: EmployeeSpace.IEmployee,
                      b: EmployeeSpace.IEmployee
                    ) => {
                      if (a.firstName < b.firstName) {
                        return -1;
                      }
                      if (a.firstName > b.firstName) {
                        return 1;
                      }
                      return 0;
                    }
                  )
                  .map((item: EmployeeSpace.IEmployee) => (
                    <Employee
                      key={item.id}
                      id={item.id}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      dob={item.lastName}
                    />
                  ))
              ) : (
                <p>"No employees"</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
