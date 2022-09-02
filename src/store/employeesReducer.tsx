import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EmployeesAPI } from "../api";

interface EmployeesState {
  employees: any[];
}

const initialState = { employees: [] } as EmployeesState;

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees(state, action) {
      const employees = action.payload;
      let sorted: any = [];
      for (let i = 65; i < 91; i++) {
        const letter = String.fromCharCode(i);
        let filtered: any = { letter: letter, items: [] };
        for (let i = 0; i < employees.length; i++) {
          const filteredCopy = JSON.parse(JSON.stringify(filtered));
          if (employees[i].firstName.charAt(0) === letter) {
            filteredCopy.items = [...filteredCopy.items, employees[i]];
            filtered = filteredCopy;
          }
        }
        sorted = [...sorted, JSON.parse(JSON.stringify(filtered))];
      }
      state.employees = sorted;
    },
    sortEmployees(state, action) {
      // state.employees.forEach((el, index) => {
      //   console.log(el);
      // });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {});
  },
});

export const fetchEmployees = createAsyncThunk(
  "employees/fetchAll",
  async (_, thunkAPI) => {
    const response = await EmployeesAPI.fetchAllEmployees();
    thunkAPI.dispatch(setEmployees(response.data));
  }
);

export const { setEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
