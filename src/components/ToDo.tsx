import { Box, Button } from "@mui/material";
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
    const HandleClick = () => {
        console.log("a");
    };
    return (
        <Stack spacing={3}>
            {demodeta.map(({ task, time }, index) => (
                <Box>
                    <ToDoRow time={time} task={task} />
                    <Button onClick={HandleClick}>完了</Button>
                </Box>
            ))}
        </Stack>
    );
}
