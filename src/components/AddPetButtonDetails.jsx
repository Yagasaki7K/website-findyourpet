import styled from 'styled-components'

const AddPetButtonDetails = styled.div`
    .firstButton {
        background: #1d1e26;
        width: 50px;
        height: 50px;
        color: #9580ff;
        position: fixed;
        border: 1px solid #9580ff;
        bottom: 20px;
        right: 0px;
        z-index: 99;
        padding: 15px;
        border-radius: 10px; 
        font-size: 18px;

        :hover {
            transition: 1s;
            background: #9580ff;
            color: #fff;
        }
    }

    .secondButton {
        background: #1d1e26;
        width: 50px;
        height: 50px;
        color: #fff;
        position: fixed;
        bottom: 80px; // Side by Side 20px
        right: 0px; // Side by Side 60px
        z-index: 99;
        padding: 15px;
        border-radius: 10px; 
        font-size: 18px;

        :hover {
            transition: 1s;
            background: #9580ff;
            color: #fff;
        }
    }
`

export default AddPetButtonDetails