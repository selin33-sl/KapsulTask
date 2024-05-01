import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const apiBaseUrl = 'https://api-kuzem.konya.bel.tr/api/Courses';

axios.defaults.baseURL = apiBaseUrl;

const getAllCoursesProcess = createAsyncThunk(
  'getAllCourses/getAllCoursesProcess',
  async ({data}, {rejectWithValue}) => {
    try {
      const {page, pageSize} = data;
      const res = await axios.post(`GetAll?type=Offline`, data);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);
const getSearchCoursesProcess = createAsyncThunk(
  'getSearchCourses/getSearchCoursesProcess',
  async ({data}, {rejectWithValue}) => {
    try {
      const res = await axios.post(`Search`, {
        sort: [
          {
            field: 'name',
            dir: 'asc',
          },
        ],
        filter: {
          field: 'name',
          operator: 'contains',
          value: data,
        },
      });
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

export {getAllCoursesProcess, getSearchCoursesProcess};
