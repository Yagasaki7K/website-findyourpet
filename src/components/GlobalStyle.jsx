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
    color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.darkColor : Colors.lightColor)};
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body::-webkit-scrollbar {
    width: 12px;
    /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
    background: #268864;
    /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
    background-color: #48e0a9;
    /* color of the scroll thumb */
    border-radius: 20px;
    /* roundness of the scroll thumb */
    /* creates padding around scroll thumb */
}

button {
    margin-right: 25px;
    border: none;
    width: 200px;
    height: 40px;
    color: #aeaa46;
    background: transparent;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}


`
