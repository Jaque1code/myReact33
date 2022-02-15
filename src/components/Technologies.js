import htm from "../imagenes/imagenhtml.png"
import jv from "../imagenes/imajavascri.jpg"
import jvv from "../imagenes/imagenjav.jpg"
import re from "../imagenes/imagenreact.png"
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@material-ui/lab"
import { makeStyles, Paper, Typography } from "@material-ui/core"
import StarRating from "./StarRating"

const Technologies = () => {
   const classes = useStyles()
    const skills = [
        {
            year:"2020",
            src: htm,
            title:"HTML 5",
            stars: 2,
        },
        {
            year:"2020",
            src: jv,
            title:"javascript",
            stars: 3,
        },
        {
            year:"2021",
            src: jvv,
            title:"java",
            stars: 2,
        },
        {
            year:"2021",
            src: re,
            title:"React",
            stars: 1,
        },
    ]


    return (
        <Timeline align="left">
        {
              skills.map(({year,src, title, stars} ,index) =>(
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                    <Typography variant="h6" color="textSecondary">
                        {year}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                      <img src={src} alt={title} className={classes.customlogo}/>                  
                 <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={5} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            {title}    
                        </Typography>
                        <StarRating stars={stars}/>
                    </Paper>
                </TimelineContent>
              </TimelineItem>
            ))
        }
        </Timeline>
    )
}

const useStyles =  makeStyles((theme) => ({
    customlogo: {
        width:"50px",
    },
    paper: {
        padding:"6px 16px",
        maxWidth:" 260px",
    }
}))



export default Technologies