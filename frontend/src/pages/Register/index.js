import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, ContainerButton, Label, Div } from './styles';

export default function Register() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');

	const history = useHistory();

	const navigateBack = () => {
		return history.goBack();
	};

	const haddleRegister = () => {
		return;
	};

	return (
		<>
			<Header />
			<Container>
				<Label>Nome:</Label>
				<Input
					textInputChange={(event) => setUsername(event.target.value)}
					value={username}
				/>

				<Label>E-mail:</Label>
				<Input
					textInputChange={(event) => setEmail(event.target.value)}
					value={email}
				/>

				<ContainerButton>
					<Button submit={navigateBack}>Voltar</Button>

					<Div />

					<Button submit={haddleRegister} primary>
						Cadastrar
					</Button>
				</ContainerButton>
			</Container>
		</>
	);
}
