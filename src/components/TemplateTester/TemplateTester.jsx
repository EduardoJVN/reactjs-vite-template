import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode, selectMode } from '../../slices/theme';

function TemplateTester() {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  return (
    <IconButton onClick={() => dispatch(changeMode())}>
      <Brightness4Icon
        sx={{
          transition: 'transform 0.4s',
          transform: mode === 'dark' ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      />
    </IconButton>
  );
}

export default TemplateTester;
