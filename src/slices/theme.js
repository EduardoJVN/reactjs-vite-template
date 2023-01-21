import { createSlice } from '@reduxjs/toolkit';

const validMode = () => {
  let defaultMode = false;
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    defaultMode = 'dark';
  } else {
    defaultMode = 'light';
  }

  const mode = localStorage.getItem('mode') ? localStorage.getItem('mode') : defaultMode;
  if (mode === 'dark') {
    return 'dark';
  }
  return 'light';
};
export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: validMode(),
  },
  reducers: {
    changeMode: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
        localStorage.setItem('mode', 'dark');
      } else {
        state.mode = 'light';
        localStorage.setItem('mode', 'light');
      }
    },
  },
});
export const { changeMode } = themeSlice.actions;
export const selectMode = (state) => state.theme.mode;
export default themeSlice.reducer;
