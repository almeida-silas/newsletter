import React from 'react';

import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container } from './styles';

export default function Main() {
	const history = useHistory();

	const navigateToRegister = () => {
		return history.push('/register');
	};

	const navigateToSendMessage = () => {
		return history.push('/sendMessage');
	};

	return (
		<>
			<Header />

			<Container>
				<Button submit={navigateToRegister} primary>
					Cadastrar Cliente
				</Button>

				<Button submit={navigateToSendMessage}>Enviar Promoção</Button>
			</Container>
		</>
	);
}
