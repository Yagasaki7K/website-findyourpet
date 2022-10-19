import styled from 'styled-components'

const FormSignUpDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        margin-top: 20px;
        margin-bottom: 1rem;
        padding: 20px 40px;
        background: #1d1e26;
        box-shadow: #9a48ff 0px 0px 50px;
        border-radius: 15px;

        textarea {
            width: 220px;
            height: 60px;
        }

        i {
            font-size: 10px;
        }
        
        h4 {
            margin-bottom: 5px;
        }

        .send, .reset {
            color: #fff;
            font-weight: 300;
            width: 100px;     
            
            :hover {
                transition: 1s;
                filter: brightness(85%)
            }
        }

        .send {
            margin-top: 20px;
            background: #63bd4d;
        }

        .reset {
            background: #bbbd4d;
        }
    }
`

export default FormSignUpDetails