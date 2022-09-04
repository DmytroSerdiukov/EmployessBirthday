import Employee from "./Employee";

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

export default Employees;
