import axios from "axios";

export const EmployeesAPI = {
  fetchAllEmployees: async () => {
    try {
      const response = await axios(`/tasks/users`);
      return response;
    } catch (e) {
      throw e;
    }
  },
};
