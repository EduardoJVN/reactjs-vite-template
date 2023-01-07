import { Stack, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode, selectMode } from '../../features/user/userSlice';

function TemplateTester() {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  return (
    <Stack gap={5}>
      <Stack
        sx={{
          p: 2,
          boxShadow: 3,
          borderRadius: 5,
          position: 'relative',
          backgroundColor: 'grey.100',
        }}
        gap={2}
      >
        <Typography variant="h3">test</Typography>
        <IconButton onClick={() => dispatch(changeMode())} sx={{ position: 'absolute', top: 10, right: 10 }}>
          <Brightness4Icon
            sx={{
              transition: 'transform 0.4s',
              transform: mode === 'dark' ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default TemplateTester;
