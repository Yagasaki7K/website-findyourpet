import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:is(h3, p, form){
  color: ${(props) => props.theme.colors.textInfoPet};

}
a {
  color: ${(props) => props.theme.colors.text};
}
.pets-list-item{
    background: ${(props) => props.theme.colors.backgroundPets} ;
}
body{
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}
`
