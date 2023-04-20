import { createGlobalStyle } from "styled-components";
import Colors from '../utils/Colors'

export default createGlobalStyle`

:is(form){
  color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.darkColor : Colors.darkColor)};

}
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
}
`
