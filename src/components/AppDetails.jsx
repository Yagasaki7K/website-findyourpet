import styled from 'styled-components'
import Colors from '../utils/Colors'

const HomeDetails = styled.div`

    color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.lightColor)}; 

    position: relative;
    
    a {
        font-weight: 400;
    }

    *{
        padding: 0;
        margin: 0;
    }
  /* This code adjusts the position of an image based on the screen size */
    @media (max-width: 414px) {
    left: 3%;
    }

    @media (max-width: 360px) {
     left: 20%;
    }




    ul {
        display: flex;
        width: 100%;
        padding-top: 1rem;
        align-items: center;
        justify-content: center;


        @media (max-width: 1366px) {
            padding-top: 0.6rem;
        }

        img {
            width: 20rem;
            margin-left: 4rem;
            margin-right: 4rem;


            @media (max-width: 1920px) {
                margin-top: 2rem;
            }

            @media (max-width: 1600px) {
              margin-left: -2rem;
              margin-top: 1rem;
            }

            @media (max-width: 1366px) {
                margin-top: 0.6rem;
            }

            @media (max-width: 1440px) {
                margin-left: 3rem;
            }

            @media (max-width: 1366px) {
                margin-left: 1.5rem;
            }

            @media (max-width: 1024px) {
                margin-top: 5rem;
            }

            @media (max-width: 768px) {
                margin-left: 10rem;
            }

            @media (max-width: 600px) {
                margin-top: 0rem;
                margin-left: 0rem;
            }
        }

        li {
            margin-right: 2rem;
            margin-top: 2rem;
            list-style: none;

            @media (max-width: 1600px) {
                margin-top: 1rem;
            }

            @media (max-width: 1366px) {
                margin-top: 1rem;
            }

            @media (max-width: 1024px) {
                display: none;
            }

            a {
                color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.lightColor)}; 
      
                text-decoration: none;

                :hover {
                    transition: 1s;
                    background: ${Colors.primary};
                    background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }

        }

        button {
            background: ${Colors.primary};
            background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
            color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.lightColor)}; 

            text-transform: uppercase;
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            border-radius: 15px;
            margin-top: 1.5rem;
            font-weight: bold;

            @media (max-width: 1920px){
                margin-left: 45rem;
            }

            @media (max-width: 1600px) {
                margin-left: 25rem;
            }

            @media (max-width: 1440px) {
                margin-left: 15rem;
            }

            @media (max-width: 1366px) {
                margin-left: 10rem;
            }

            @media (max-width: 1024px) {
                display: none;
            }

            height: 2.5rem;
            width: 10rem;

            cursor: pointer;

            :hover {
                transition: 2s;
                background: ${Colors.primaryAlt};
                background: linear-gradient(90deg, ${Colors.primaryAlt} 0%, ${Colors.primary} 100%);
            }
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        line-height: 5rem;
        max-width: 800px;
        margin: 0 auto;

        @media (max-width: 1920px) {
            margin-top: 8rem;
        }

        @media (max-width: 1366px) {
            margin-top: 3rem;
        }

        @media (max-width: 768px) {
            margin-left: 5rem;
        }

        @media (max-width: 600px) {
            margin-left: 1.5rem;
        }

        h1 {
            font-size: 5rem;
            margin-top: 5rem;
            margin-bottom: 2rem;
            text-transform: uppercase;

            @media (max-width: 1366px) {
                font-size: 5rem;
            }

            @media (max-width: 1024px) {
                font-size: 2.0rem;
            }

            @media (max-width: 1024px) {
                margin-top: 1rem;
                margin-top: 3rem;
            }


            @media (max-width: 800px) {
                margin-top: -2rem;
            }


            @media (max-width: 600px) {
                margin-top: 2rem;
                font-size: 2rem;
            }
        }

        .love {
            background: ${Colors.primary};
            background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        button {
            background: ${Colors.primary};
            background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
            color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.lightColor)}; 
            text-transform: uppercase;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            font-size: 1.2rem;
            border-radius: 25px;
        
            
            cursor: pointer;

            :hover {
                transition: 2s;
                background: ${Colors.primaryAlt};
                background: linear-gradient(90deg, ${Colors.primaryAlt} 0%, ${Colors.primary} 100%);
            }
        }

        .links {
            margin-top: 16rem;
            margin-left: 2rem;

            @media (max-width: 1920px) {
                margin-top: 18rem;
            }

            @media (max-width: 1600px) {
                margin-top: 7rem;
            }

            @media (max-width: 1366px) {
                margin-top: 6rem;
            }

            
            @media (max-width: 1280px) {
                margin-top: 9rem;
            }

 
            @media (max-width: 1024px) {
                margin-top: 3rem;
            }

            @media (max-width: 600px) {
                margin-top: 10rem;
            }

   
            a {
                color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.lightColor)}; 

            
                text-decoration: none;

                :hover {
                    background: ${Colors.primary};
                    background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }
`

export default HomeDetails
