import styled from 'styled-components'

const HomeDetails = styled.div`
    a:hover {
        transition: 1s;
        color: #d2c4ff;
    }

    .titlePets {
        margin-left: 20px;
        margin-bottom: -5px;
    }

    .advicePets {
        margin-left: 20px;
        font-size: 12px;
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 5px 40px;

        img {
            width: 50px;
            margin-bottom: 10px;
        }

        a {
            text-decoration: none;
            font-weight: 400;
        }
    }

    .advice {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        background: #50a773;
        border: none;
        font-weight: 500;
        text-decoration: none;
        outline: none;
        color: #fff;

        :hover {
            color: #703edb;
        }
    }

    .categories {
        margin-left: 20px;
    }

    .categories-list {
        display: flex;

        a {
            margin-right: 20px;
            font-weight: 500;
        }

        .menu {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .pets-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        margin-left: 5px;
        margin-bottom: 30px;

        a {
            text-decoration: none;
            font-weight: 400;
            margin-top: 20px;
        }
    }

    .pets-list-item {
        width: 420px;
        height: 180px;
        border: 1px solid #fff;
        border-radius: 15px;
        display: flex;

        img {
            border-radius: 15px;
            width: 200px;
            height: 180px;
        }

        h3, p {
            margin: 10px 0px 10px 10px;
        }

        p {
            font-size: 14px;
        }

        i {
            font-size: 14px;
        }

        :hover {
            background: #ccc;
            color: #703edb;
            transition: .3s;
        }
    }

    footer {
        display: flex;
        justify-content: center;
        margin-left: 100px;
        
        .footer-content {
            margin-right: 200px;
            display: flex;
            flex-direction: column;

            h2 {
                margin-bottom: -5px;
            }
            
            a {
                font-weight: 300;
                margin-top: 10px;
            }

            i {
                font-size: 14px;
            }
        }
    }

    .copyright {
        margin-top: 20px;
    }

    hr {
        margin-top: 20px;
        width: 50%;
    }

    @media screen and (max-width: 1366px) {
        footer {
            margin-left: 200px;
        }
    }
`

export default HomeDetails