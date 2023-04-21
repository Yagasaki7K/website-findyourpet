import { createGlobalStyle } from "styled-components";
import Colors from '../utils/Colors'

export default createGlobalStyle`


a {
  color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.darkColor)};

}

*{
        padding: 0;
        margin: 0;
 }

body{

    background-color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.darkColor : Colors.lightColor)}; 
    color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.darkColor)};
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}






`
