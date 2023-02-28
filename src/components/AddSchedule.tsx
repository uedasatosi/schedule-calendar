import { Button, Paper, Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { Dayjs } from "dayjs";
import React, { useState } from "react";

export default function AddSchedule() {
    const [value, setvalue] = useState<Dayjs | null>();
    const [input, setInput] = useState("");
    const handleChange = (NewValue: Dayjs | null) => {
        setvalue(NewValue);
    };
    const addTodo = async (userMail: string) => {
        const formDate = (value as Dayjs).format().split("T")[0].split("-");
        const response = await axios.post(
            "https://sukejurukarenda.ddns.net/todo",
            {
                year: formDate[0],
                month: formDate[1],
                day: formDate[2],
                time: "10:00",
                task: input,
                email: userMail,
            }
        );
        return response;
    };
    const handleClick = () => {
        const result = addTodo("test@mail.com");
        console.log(result);
    };
    return (
        <Paper>
            <Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        label="日付を選択"
                        inputFormat="YYYY/MM/DD"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    ></DesktopDatePicker>
                </LocalizationProvider>
                <TextField
                    label="予定"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setInput(event?.target.value)
                    }
                    value={input}
                ></TextField>
                <Button onClick={() => handleClick()}> 送信</Button>
            </Stack>
        </Paper>
    );
}
