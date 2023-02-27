import { Paper, Stack, Typography } from "@mui/material";

type ToDoRowProps = { time: string; task: string };

export default function ToDoRow({ time, task }: ToDoRowProps) {
  return (
    <Paper>
      <Stack direction="row" p={2} spacing={3}>
        <Typography>{time}</Typography>
        <Typography>{task}</Typography>
      </Stack>
    </Paper>
  );
}
