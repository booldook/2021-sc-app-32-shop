import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** state *************/
const state = {
  selTree: '',
  allTree: [],
};

/** async action ******/
export const asyncTree = createAsyncThunk('tree/asyncTree', async () => {
  const url = 'http://127.0.0.1:3100/api/tree';
  const { data } = await axios.get(url);
  const tree = data[0].children.map((v) => {
    let children = v.children.map((v2) => ({ id: v2.id, title: v2.text }));
    return { id: v.id, title: v.text, children };
  });
  return tree;
});

/** reducer ***********/
export const treeSlice = createSlice({
  name: 'tree',
  state,
  reducers: {
    selTree: (state, payload) => {
      state.selTree = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncTree.pending, (state, action) => {})
      .addCase(asyncTree.fulfilled, (state, action) => {})
      .addCase(asyncTree.rejected, (state, action) => {});
  },
});

/** method ************/
export const 사용자함수 = (state) => state.data;
export const { 동기액션 } = 슬라이스네임.actions;
export default 슬라이스네임.reducer;
