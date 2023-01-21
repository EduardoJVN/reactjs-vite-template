import { api } from '../api';
import theme from './theme';
import user from './user';

export default {
  [api.reducerPath]: api.reducer,
  theme,
  user,
};
