import axios from "axios";

export const EmployeesAPI = {
  fetchAllEmployees: async () => {
    try {
      const response = await axios(`http://topdevsprojects.org/tasks/users`);
      return response;
    } catch (e) {
      throw e;
    }
  },
};
