import { Card, Box } from '@material-ui/core';

export const NotFound = () => {
  return (
    <Card variant="outlined">
      <Box>
        <div>There is no such book!</div>
      </Box>
    </Card>
  );
};
