import { Card, Box } from '@material-ui/core';

export const NotFound = () => {
  return (
    <Card variant="outlined">
      <Box>
        <div>There is no such book, please enter a different title!</div>
      </Box>
    </Card>
  );
};
