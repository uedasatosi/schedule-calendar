import { List, ListItem } from "@mui/material";
import TimeLineRow from "./TimeLineRow";
export default function TimeLine() {
    const hours = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
    ];

    return (
        <List sx={{ overflow: "auto", maxHeight: "500px" }}>
            {hours.map((hour, index) => (
                <ListItem>
                    {" "}
                    <TimeLineRow hour={hour} />
                </ListItem>
            ))}
        </List>
    );
}
