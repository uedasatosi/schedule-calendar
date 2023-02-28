import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
type TimeLineRowprops = {
    hour: number;
};

export default function TimeLineRow({ hour }: TimeLineRowprops) {
    return (
        <Stack
            sx={{ width: "300px", backgroundColor: "#EEEEEEE", height: "60px" }}
        >
            <Divider>
                <Typography>{hour}</Typography>
            </Divider>
        </Stack>
    );
}
