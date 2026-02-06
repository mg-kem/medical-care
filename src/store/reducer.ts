import { createReducer } from '@reduxjs/toolkit';
import { toggleOpenModal } from './actions';

const initialState = {
  isModalOpen: false,
}

export const reducer = createReducer(initialState,
  (builder) => {
    builder.addCase(toggleOpenModal, (state, action) => {
      state.isModalOpen = action.payload;
    });
  })