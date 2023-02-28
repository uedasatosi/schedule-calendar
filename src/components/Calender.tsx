import dayGridPlugin from "@fullcalendar/daygrid"; // pluginは、あとから
import FullCalendar from "@fullcalendar/react";
type CalenderProps = {
    tasks: taskType[];
};
type taskType = {
    task: string;
    year: number;
    month: number;
    day: number;
    time: string;
};
export default function Calender({ tasks }: CalenderProps) {
    const taskProps = tasks.map((task) => {
        return {
            title: task.task,
            date: `${task.year}-${("0" + task.month).slice(-2)}-${task.day}`,
        };
    });
    console.log(taskProps);
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale={"ja"}
                height={"100vh"}
                events={taskProps}
            />
        </div>
    );
}
// export default function Calender() {
//   const month = [
//     [1, 2, 3, 4, 5, 6, 7],
//     [8, 9, 10, 11, 12, 13, 14],
//     [15, 16, 17, 18, 19, 20, 21],
//     [22, 23, 24, 25, 26, 27, 28],
//   ];
//   console.log(month);
//   return (
//     <Grid container sx={{ width: "60%" }}>
//       {month.map((days, index) => (
//         <CalenderRow days={days} />
//       ))}
//     </Grid>
//   );
// }
