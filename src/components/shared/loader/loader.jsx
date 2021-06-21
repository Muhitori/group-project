import { CircularProgress, Box } from '@material-ui/core';

const Spinner = () => {
  console.log('spinner');
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: '#ccccc' }}
      position="absolute"
      width="100%"
      height="100vh"
      zIndex={10}
      top="0"
      margin="0 a
    uto"
    >
      <CircularProgress size={60} thickness={2} />
    </Box>
  );
};

export { Spinner };
