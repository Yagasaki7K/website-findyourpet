import styled from 'styled-components'
import Colors from '../utils/Colors'

const FormSignUpDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;

        margin: 30px 0 1rem 0rem;
        padding: 20px 40px;
        background: ${(props) => (props.theme.mode === 'dark' ? Colors.darkColor : Colors.lightColor)};
        box-shadow: ${Colors.primary} 0px 0px 50px;
        border-radius: 15px;

        input, textarea, select {
            padding: 0.3rem;
            border-radius: 5px;
            border: none;
            font-size: 0.8rem;
            font-family: 'Poppins', sans-serif;
            width: 80%;
        }

        input, textarea, select, i, h4 {
            margin-left: 1rem;
        }

        i {
            font-size: 10px;
        }

        h4 {
            margin-bottom: 5px;
        }

        .send, .reset {
            color: ${(props) => (props.theme.mode === 'dark' ? Colors.lightColor : Colors.darkColor)};
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
            margin-left: 1.5rem;
        }
    }
`

export default FormSignUpDetails
