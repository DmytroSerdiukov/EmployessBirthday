import { useAppSelector } from "../store/hooks";

const BithdayMonth = ({ months, activeEmployees }: any) => {
  return (
    <div>
      {months.map((month: any) => (
        <div>
          <h1>{month}</h1>
          <ul>
            {activeEmployees
              .slice()
              .sort((a: any, b: any) => {
                if (a.lastName < b.lastName) {
                  return -1;
                }
                if (a.lastName > b.lastName) {
                  return 1;
                }
                return 0;
              })
              .map((el: any) => {
                const date = el.dob.slice(0, 10).split("-");
                if (month === months[parseInt(date[1]) - 1])
                  return (
                    <li key={el.id}>
                      {el.firstName} {el.lastName} - {date[2]}
                      {months[parseInt(date[1]) - 1]}, {date[0]} year
                    </li>
                  );
              })}
          </ul>
        </div>
      ))}
    </div>
  );
};

const EmployeeBirthdays = () => {
  const activeEmployees = useAppSelector(
    (state) => state.employees.activeEmployees
  );
  const months = [
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
