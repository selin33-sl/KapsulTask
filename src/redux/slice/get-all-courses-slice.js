import {createSlice} from '@reduxjs/toolkit';
import {getAllCoursesProcess} from '../../api';

export const getAllCoursesSlice = createSlice({
  name: 'getAllCourses',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetAllCourses: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCoursesProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCoursesProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data);
      })
      .addCase(getAllCoursesProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAllCourses} = getAllCoursesSlice.actions;
export default getAllCoursesSlice.reducer;
