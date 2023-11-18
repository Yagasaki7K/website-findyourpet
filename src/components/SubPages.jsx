import styled from 'styled-components'

const SubPage = styled.div`
    background-color: #999999;
    justify-content: center;
    align-items: center;

    .container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
         .content {
            width: 100%;
            max-width: 1200px;
            padding: 4rem 0;

            h2 {
                margin: 2rem 0;
            }

            img {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 400px;
            }
    
            p {
                width: 100%;
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
        }
    }

`

export default SubPage