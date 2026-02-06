import { createAction } from '@reduxjs/toolkit';

export const toggleOpenModal = createAction('toggleOpenModal', (isOpen: boolean) => ({
  payload: isOpen,
}))