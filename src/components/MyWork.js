import { Card, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import mdata from "../mdata"






const MyWork = ({title, dark, id}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
         <div className={classes.sectioncontent} id={id}>
             <Typography variant="h3">{title}</Typography>
             <Grid container className={classes.grid}>
                 {
                     mdata.map(({title, image},index) =>(
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia image= {image } className={classes.portada} titulo="portada"/>  
                                {title}
                            </Card>
                        </Grid> 
                      ))
                 }
             </Grid>
         </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight:"100vh",
    },
    sectiondark: {
        background:"#333",
        color:"#fff",
    },
    sectioncontent: {
        maxWidth:"90vw",
        margin: "0 auto",
        padding: theme.spacing(5),

    },
    grid:{
      marginTop: theme.spacing(10),
    },
    card: {
      maxWidth: 345,
      minHeight: 155,
      margin: theme.spacing(3),
    },
    portada: {
            height: 0,
            paddingTop: '78.25%',
        
    }
}))







export default MyWork