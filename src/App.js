import { createMuiTheme, makeStyles } from "@material-ui/core";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const theme = createMuiTheme


function App() {
  const classes = useStyles();
  return (
  
     <div>
     <Navbar /> 
       <About title= "About Me" id="about" dark={true }/>
       <Skills title="My coding Journey" id="skills" dark={false }/>
       <MyWork title="My Work" id="work" dark={true }/>
       <Contact title="Get in touch" id="contact" dark={false }/>
    </div>

  );
}

const useStyles = makeStyles((theme) => ({
  root:{ 

  }
}))

export default App;
