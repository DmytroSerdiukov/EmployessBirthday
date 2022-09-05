export namespace EmployeeSpace {
  export interface EmployeesProps {
    employees: IEmployeesArray[];
  }

  export interface IEmployeesArray {
    letter: string;
    items: IEmployee[];
  }

  export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
  }
}
