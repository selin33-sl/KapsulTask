import {createSlice} from '@reduxjs/toolkit';
import {getSearchCoursesProcess} from '../../api';

export const getSearchCoursesSlice = createSlice({
  name: 'getSearchCourses',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetSearchCourses: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchCoursesProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchCoursesProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data);
      })
      .addCase(getSearchCoursesProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetSearchCourses} = getSearchCoursesSlice.actions;
export default getSearchCoursesSlice.reducer;
