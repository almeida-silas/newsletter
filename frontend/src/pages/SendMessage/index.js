import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';
import { Input, InputTextarea } from '../../components/Input';
import { Container, ContainerButton, Div } from './styles';

import api from '../../services/api';

export default function SendMessage() {
	const [subject, setSubject] = useState('');
	const [content, setContent] = useState('');
	const history = useHistory();

	const navigateBack = () => {
		return history.goBack();
	};

	const sendMessage = async () => {
		if (!subject.trim() || !content.trim()) {
			return alert('Preencha todos os campos antes de enviar!!');
		}

		await api.post('/message', { message: { subject, content } });
		window.location.href = '/';
	};

	return (
		<>
			<Header />

			<Container>
				Assunto:
				<Input
					textInputChange={(event) => setSubject(event.target.value)}
					value={subject}
				/>
				Mensagem:
				<InputTextarea
					textInputChange={(event) => setContent(event.target.value)}
					value={content}
				/>
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
