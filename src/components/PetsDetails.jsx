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

        @media (max-width: 768px) {
            margin-top: 10px;
            width: 300px;
        }
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 5px 40px;

        @media (max-width: 768px) {
            .items {
                display: none;
            }
        }

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
        @media (max-width: 768px) {
            i {
                display: none;
            }
        }

        @media (max-width: 600px) {
            display: flex;
            justify-content: center;
            text-align: center;
        }
    }

    .advice-yellow {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        background: #e0d754;
        border: none;
        font-weight: 500;
        text-decoration: none;
        outline: none;
        color: #181818;

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

        @media (max-width: 414px) {
            width: 325px;
            height: 230px;

            img {
                width: 100px;
                height: 80px;
                margin-top: 25px;
            }

            .pets-list-item-info {
                margin-top: 10px;
            }
        }

        img {
            border-radius: 15px;
            width: 200px;
            height: 180px;
        }

        h3, p {
            margin: 10px;
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

        @media (max-width: 1366px) {
            margin-left: 200px;
        }

        @media (max-width: 768px) {
            margin-left: 50px;
        }

        @media (max-width: 414px) {
            flex-direction: column;
            text-align: center;
        }
        
        .footer-content {
            margin-right: 200px;
            display: flex;
            flex-direction: column;

            @media (max-width: 768px) {
                margin-right: 50px;
            }

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
`

export default HomeDetails