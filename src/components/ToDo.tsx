import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import ToDoRow from "./ToDoRow";

export function ToDo() {
  const demodeta = [
    {
      time: "12:00",
      task: "todo",
    },
    {
      time: "12:00",
      task: "todo",
    },
    {
      time: "12:00",
      task: "todo",
    },
  ];
  return (
    <Stack spacing={3}>
      {demodeta.map(({ task, time }, index) => (
        <Box>
          <ToDoRow time={time} task={task} />
        </Box>
      ))}
    </Stack>
  );
}

const task = [
  {
    content: "demodate",
  },
];
