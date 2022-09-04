import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EmployeesAPI } from "../api";

interface EmployeesState {
  employees: any[];
  activeEmployees: any[];
}

const initialState = { employees: [], activeEmployees: [] } as EmployeesState;

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
    setActiveEmployees(state, action) {
      let items: any[] = [];
      items = state.employees.map((el) => {
        return JSON.parse(JSON.stringify(el.items));
      });
      let active: any[] = [];
      for (let i = 0; i < items.length; i++) {
        active = [...active, ...items[i]];
      }
      active = active.filter((el) => el.id === action.payload);
      state.activeEmployees = [...state.activeEmployees, ...active];
      console.log("active", state.activeEmployees);
    },
    deleteUnactiveEmployees(state, action) {
      state.activeEmployees = state.activeEmployees.filter(
        (el) => el.id !== action.payload
      );
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

export const { setEmployees, setActiveEmployees, deleteUnactiveEmployees } =
  employeesSlice.actions;
export default employeesSlice.reducer;
