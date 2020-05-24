import React from 'react';

import styled from 'styled-components';

const handdleInput = ({ className, textInputChange, value }) => {
	return (
		<input className={className} onChange={textInputChange} value={value} />
	);
};

export const Input = styled(handdleInput)`
	display: flex;
	height: 25px;
	width: 40%;
	margin-bottom: 10px;
`;

export const InputTextarea = styled.textarea`
	display: flex;
	width: 40%;
	height: 200px;
	max-height: 450px;
	min-height: 50px;
	max-width: 1000px;
	min-width: 400px;
	margin-bottom: 10px;
`;
