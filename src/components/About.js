import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import jaque from "../imagenes/jaque55.jpg"  
import TypeWriterEffect from "react-typewriter-effect"   
import pdf from "../imagenes/CVjaque.pdf";   

const About = ({title, dark, id}) => {
    const classes = useStyles()
    return (
         <div className={`${classes.section} ${dark && classes.sectiondark}`}>
           <div className={classes.sectioncontent} id={id}>
               <Typography variant="h3">{title}</Typography>
               <Card className={classes.card}>
                   <CardMedia image={jaque} className={classes.media} title="picture"/>
                   <CardContent className={classes.cardcontent}>
                        <TypeWriterEffect 
                           text="Hi, I am Francisco Jaque, it is a pleasure "
                           textStyle={{fontSize: "2rem", fontWeight: "600px", color:"lightblue"}}
                           startDelay={100} 
                           cursorColor="3393FF"
                           typeSpeed={70}
                        />
                          <TypeWriterEffect 
                           text="Welcome to my webpage"
                           textStyle={{fontSize: "1.2rem", fontWeight: "400px"}}
                           startDelay={100} 
                           cursorColor="black"
                           typeSpeed={70}
                        />
                        <Typography variant="h6" color="textSecondary">
                            i am junior developer software, i have knowledge in javascript, html , css and react.                       
                        </Typography>
                   </CardContent>
                   <CardActions>
                       <Button variant='contained' className={classes.pdfbutton}>
                          <a href ={pdf} download>
                            Download Cv 
                          </a>
                           
                        </Button>
                   </CardActions>
               </Card> 
           </div>
         </div>
     )
}



const useStyles =  makeStyles((theme) => ({
    section: {
        minHeight: "100vh" 
    },
    sectiondark: {
         background :"#333",
         color: "#fff",
    },
    sectioncontent: {
        maxWidth:"80vw",
        margin:"0 auto",
    },
    card:{
        height:"70vh",
        display:"flex", 
        marginTop: theme.spacing(6), 
        position:"relative",
    },

    media:{
       width:"370px",
       height:"auto",
       objectFit:"cover", 
       borderRadius:"10px",
       margin: theme.spacing(5),

    },
    pdfbutton: {
       position: "absolute",
       bottom: "5rem",
       right: "4rem",
       [theme.breakpoints.down("sm")]:{
           bottom: "2.5rem",
           right: "1rem"
       },
       cardcontent: {
         marginTop: theme.spacing(2), 
         "& h6": {
             marginTop: theme.spacing(6),
             [theme.breakpoints.down("sm")]: {
                 display:"none",
             },
         },
       },
       backgroundColor: "3393FF",
       padding: theme.spacing(3), 
       "&: hover": {
            backgroundColor:"#fff",
       },
       "& a":{
           color:"#fff ",
           textDecoration:"none",   
           fontWeight: 900,
       },
       "& a:hover": {
           color: "blue",
       }

    },
}))

export default About 