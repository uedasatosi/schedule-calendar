import { Grid } from "@mui/material";
import CalenderCell from "./CalenderCell";
type CalenderRowProps = {
    days:number[]
}

export default function CalenderRow({days}:CalenderRowProps) {
 
    return (
    <Grid container gridRow={7}>
        {days.map((day,index)=>(

            <Grid item sx={{ border: "1px solid" }}>
        <CalenderCell day={day} /> 
      </Grid>
          ))}
        
    </Grid>
  );
}
