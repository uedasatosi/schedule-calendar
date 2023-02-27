import { Box, Stack, Typography } from "@mui/material";
type CalenderCellProps = {
  day: number;
};
export default function CalenderCell({ day }: CalenderCellProps) {
  return (
    <Box sx={{ width: "100px" }}>
      <Stack direction={"row"} spacing={2} p={2}>
        <Typography>{day}</Typography>
        <Stack>
          <Box>test</Box>
          <Box>test</Box>
        </Stack>
      </Stack>
    </Box>
  );
}
