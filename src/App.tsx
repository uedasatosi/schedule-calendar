import { Task } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Calender from "./components/Calender";
import TimeLine from "./components/TimeLine";
import { ToDo } from "./components/ToDo";

function Home() {
  return (
    <Stack direction={"row"}>
      <Calender />
      <ToDo />
      <TimeLine />
    </Stack>
  );
}
export default Home;
