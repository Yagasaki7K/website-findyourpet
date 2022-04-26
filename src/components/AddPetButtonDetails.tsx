import styled from 'styled-components'

const AddPetButtonDetails = styled.div`
    .firstButton {
        background: #50a773;
        width: 50px;
        height: 50px;
        color: #fff;
        position: fixed;
        bottom: 20px;
        right: 0px;
        z-index: 99;
        padding: 15px;
        border-radius: 10px; 
        font-size: 18px;

        :hover {
            transition: 1s;
            background: #62ca8c;
        }
    }

    .secondButton {
        background: #50a773;
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
            background: #62ca8c;
        }
    }
`

export default AddPetButtonDetails