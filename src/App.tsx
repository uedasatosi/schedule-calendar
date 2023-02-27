import { Task } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Calender from "./components/Calender";
import { ToDo } from "./components/ToDo";

function Home() {
  return <Stack direction={"row"}><Calender/><ToDo/>
  </Stack>;
}
export default Home;
