import styled from 'styled-components'
import Colors from '../utils/Colors'

const AddPetButtonDetails = styled.div`

    .firstButton, .secondButton, .thirdButton {
        background: ${(props) => (props.theme.mode === 'dark' ? Colors.darkColor : Colors.lightColor)};
        width: 50px;
        height: 50px;
        color: ${Colors.primary};
        position: fixed;
        border: 1px solid ${Colors.primary};

        z-index: 99;
        padding: 15px;
        border-radius: 10px;
        font-size: 18px;

        :hover {
            transition: 1s;
            background: ${Colors.primary};
            color: ${(props) => (props.theme.mode === 'dark' ? Colors.lightColor : Colors.darkColor)};
        }
    }

    .firstButton {
        bottom: 20px;
        right: 0px;
    }

    .secondButton {
        bottom: 20px; // Side by Side 20px
        right: 60px; // Side by Side 60px
    }

    .thirdButton {
        background: ${Colors.darkColor};
        width: 50px;
        height: 50px;
        color: ${Colors.primary};
        position: fixed;
        bottom: 20px; // Side by Side 20px
        right: 120px; // Side by Side 60px
        z-index: 99;
        padding: 15px;
        border-radius: 10px;
        font-size: 18px;
        border: 1px solid ${Colors.primary};
        :hover {
            transition: 1s;
            background: ${Colors.primary};
            color: ${Colors.lightColor};
        }
    }
`

export default AddPetButtonDetails
