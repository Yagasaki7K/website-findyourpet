import styled from 'styled-components'

const LoginDetails = styled.div`
  position: absolute;
    background: url('https://images.unsplash.com/photo-1546377791-2e01b4449bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    width: 100vw;
    height: 100vh;
    filter: brightness(50%);
    z-index: 0;

    @media (max-width: 414px){
      width: 103vw;
      height: 103vh

    }
    @media (max-width: 360px) {
      width: 130vw;
      height: 130vh;
  }

    @media(max-width: 320px) {
      width: 140vw;
        height: 140vh;
  }


`

export default LoginDetails
