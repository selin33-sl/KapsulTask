import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import {getAllCoursesSlice, getSearchCoursesSlice} from './slice';

const reducer = combineReducers({
  getAllCourses: getAllCoursesSlice,
  getSearchCourses: getSearchCoursesSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
