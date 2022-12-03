import styled from 'styled-components'
import Colors from '../utils/Colors'

const AddPetButtonDetails = styled.div`
    .firstButton {
        background: #1d1e26;
        width: 50px;
        height: 50px;
        color: ${Colors.purple};
        position: fixed;
        border: 1px solid ${Colors.purple};
        bottom: 20px;
        right: 0px;
        z-index: 99;
        padding: 15px;
        border-radius: 10px; 
        font-size: 18px;

        :hover {
            transition: 1s;
            background: ${Colors.purple};
            color: #fff;
        }
    }

    .secondButton {
        background: #1d1e26;
        width: 50px;
        height: 50px;
        color: ${Colors.purple};
        position: fixed;
        bottom: 20px; // Side by Side 20px
        right: 60px; // Side by Side 60px
        z-index: 99;
        padding: 15px;
        border-radius: 10px; 
        font-size: 18px;
        border: 1px solid ${Colors.purple};

        :hover {
            transition: 1s;
            background: ${Colors.purple};
            color: #fff;
        }
    }
`

export default AddPetButtonDetails