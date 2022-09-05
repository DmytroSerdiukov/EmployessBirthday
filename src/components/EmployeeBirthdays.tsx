import { useAppSelector } from "../store/hooks";
import { EmployeeSpace } from "../interfaces";

interface IBirthdayMonthProps {
  months: string[];
  activeEmployees: EmployeeSpace.IEmployee[];
}

const BithdayMonth: React.FC<IBirthdayMonthProps> = ({
  months,
  activeEmployees,
}) => {
  return (
    <div
      style={{
        border: "0px solid black",
        borderLeftWidth: 1,
        borderTopWidth: 1,
        padding: 20,
      }}
    >
      {activeEmployees.length > 0 ? (
        months.map((month: string) => (
          <div>
            <h1>{month}</h1>
            <ul>
              {activeEmployees
                .slice()
                .sort(
                  (a: EmployeeSpace.IEmployee, b: EmployeeSpace.IEmployee) => {
                    if (a.lastName < b.lastName) {
                      return -1;
                    }
                    if (a.lastName > b.lastName) {
                      return 1;
                    }
                    return 0;
                  }
                )
                .map((el: EmployeeSpace.IEmployee) => {
                  const date = el.dob.slice(0, 10).split("-");
                  if (month === months[parseInt(date[1]) - 1]) {
                    let employee_birthday = `
                  ${el.firstName} ${el.lastName} - ${date[2]}
                   ${months[parseInt(date[1]) - 1]} ${date[0]} year`;
                    return <li key={el.id}>{employee_birthday}</li>;
                  }
                })}
            </ul>
          </div>
        ))
      ) : (
        <h1>Employee list is empty</h1>
      )}
    </div>
  );
};

const EmployeeBirthdays = () => {
  const activeEmployees = useAppSelector(
    (state) => state.employees.activeEmployees
  );

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Employees birthday</h1>
      <div>
        <BithdayMonth activeEmployees={activeEmployees} months={months} />
      </div>
    </div>
  );
};

export default EmployeeBirthdays;
