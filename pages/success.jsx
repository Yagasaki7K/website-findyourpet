import React from "react";
import styled from "styled-components";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

const success = () => {
	return (
		<>
			<Navigation />
			<SuccessDetails>
				<div className="leftContent">
					<h1>Cadastro Concluído com Sucesso!</h1>
					<p>Faça a Diferença! Compartilhe nossa plataforma e ajude mais famílias a reunirem-se com seus pets desaparecidos!</p>
					<hr />
					<p>Deseja cadastrar mais pets?</p>
					<button onClick={() => (window.location.href = "/pets")}>
						Ver Pets Cadastrados <i className="uil uil-angle-right"></i>
					</button>
					<button onClick={() => (window.location.href = "/reporte")}>
						Cadastrar mais <i className="uil uil-angle-right"></i>
					</button>
				</div>

				<div className="rightContent">
					<img src="/success.png" alt="" />
				</div>
			</SuccessDetails>
			<Footer />
		</>
	);
};

export default success;

const SuccessDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 4rem;
    
    .leftContent {
        width: 35rem;
        margin-right: 5rem;

        h1 {
            color: var(--green);
            font-size: 4rem;
            line-height: 5rem;
            margin-bottom: 0rem;
        }

        hr {
            margin: 1rem 0;
            border: 1px solid var(--green-bubble);
        }

        button {
            background: var(--green);
            color: var(--white);
            border: 2px solid var(--green);
            padding: 1rem 2rem;
            border-radius: 15px;
            font-size: 1rem;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            transition: 1s;
            margin-right: 1rem;

            &:hover {
                background: var(--white);
                color: var(--green);
                border: 2px solid var(--green);
            }
        }
    }

    .rightContent {

        img {
            width: 30rem;
        }
    }
`;
