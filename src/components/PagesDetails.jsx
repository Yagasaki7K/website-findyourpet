import styled from 'styled-components'

const PagesDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .advice-yellow {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        background: var(--yellow);
        border: none;
        font-weight: 500;
        width: 100%;
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        outline: none;
        color: var(--white);
        transition: 1s;
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 30px 0 1rem 0rem;
        padding: 20px 40px;
        background: var(--green);
        color: var(--white);
        border-radius: 15px;

        input, textarea, select {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            background: var(--white);
            color: var(--gray-alt);
            font-size: 1rem;
            font-family: 'Poppins', sans-serif;
            width: 85%;

            :focus {
                outline: none;
            }
        }

        input, textarea, select, i, h4 {
            margin-left: 1rem;
        }

        i {
            font-size: 10px;
            color: var(--white);
        }

        h4 {
            margin-bottom: 5px;
            color: var(--white);
        }

        .send, .reset {
            color: var(--white);
            font-weight: 300;
            font-size: 1rem;
            font-family: 'Poppins', sans-serif;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 1s;

            &:hover {
                transition: 1s;
                filter: brightness(110%)
            }
        }

        .send {
            margin-top: 20px;
            background: var(--green-alt);
            margin: 1rem;
        }

        .reset {
            background: var(--yellow);
        }
    }
`

export default PagesDetails