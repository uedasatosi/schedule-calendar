import { Stack } from "@mui/material";
import AddSchedule from "./components/AddSchedule";
// import Calender from "./components/Calender";

import TimeLine from "./components/TimeLine";

import axios from "axios";
import { useEffect, useState } from "react";
import Calender from "./components/Calender";
import { ToDo } from "./components/ToDo";

function Home() {
    const [task, setTask] = useState([]);

    const getTask = async (mail: string) => {
        const response = await axios.get(
            `https://sukejurukarenda.ddns.net/todo/${mail}`
        );
        console.log(response.data);
        return response.data;
    };

    useEffect(() => {
        const f = async () => {
            const tasks = await getTask("test@mail.com");

            setTask(tasks);
        };
        f();
    }, []);
    return (
        <Stack direction={"row"}>
            <Calender tasks={task} />
            <Stack>
                <AddSchedule />
                <ToDo />
            </Stack>
            <TimeLine />
        </Stack>
    );
}
export default Home;
