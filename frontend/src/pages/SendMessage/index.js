import React from 'react';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';
import { Input, InputTextarea } from '../../components/Input';
import { Container, ContainerButton, Div } from './styles';

export default function SendMessage() {
	const history = useHistory();

	const navigateBack = () => {
		return history.goBack();
	};

	const sendMessage = () => {
		return;
	};

	return (
		<>
			<Header />

			<Container>
				Assunto:
				<Input />
				Mensagem:
				<InputTextarea />
				<ContainerButton>
					<Button submit={navigateBack}>Voltar</Button>
					<Div />
					<Button submit={sendMessage} primary>
						Enviar
					</Button>
				</ContainerButton>
			</Container>
		</>
	);
}
