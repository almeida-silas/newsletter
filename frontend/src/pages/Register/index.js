import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, ContainerButton, Label, Div } from './styles';

import api from '../../services/api';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const history = useHistory();

	const navigateBack = () => {
		return history.goBack();
	};

	const haddleRegister = async () => {
		if (!name.trim() || !email.trim()) {
			return alert('Insira os dados antes de avançar!');
		}

		const user = { name, email };
		await api
			.post('/user', user)
			.then(() => {
				alert('O email foi cadastrado!!');
				window.location.href = '/';
			})
			.catch(() => {
				return alert('Ocorreu um erro ao cadastrar este email!');
			});
	};

	return (
		<>
			<Header />
			<Container>
				<Label>Nome:</Label>
				<Input
					textInputChange={(event) => setName(event.target.value)}
					value={name}
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
