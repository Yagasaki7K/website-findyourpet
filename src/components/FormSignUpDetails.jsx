import styled from 'styled-components'

const FormSignUpDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        margin-top: 20px;
        padding-bottom: 20px;
        padding-left: 30px;
        background: #703edb;
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
                background: #c7c7c7;
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