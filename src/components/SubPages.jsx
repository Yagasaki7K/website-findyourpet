import styled from 'styled-components'

const SubPage = styled.div`
    margin-left: 40px;
    justify-content: center;
    align-items: center;

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
    }

    p {
        width: 40%;
    }

    @media (max-width: 700px){
        p {
        margin: 0;
        width: 90%;
        padding: 10px;
        }
    }
    @media (max-width:415px){
        img {
        width: 300px;
        }
        
        p{
            font-size: 1.2em;
        }
    }

    @media (max-width:320px){
        img {
        width: 250px;
        }
    }

    
    


`

export default SubPage