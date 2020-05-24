import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const Submit = ({ className, children, submit }) => {
	return (
		<>
			<button className={className} onClick={submit}>
				{children}
			</button>
		</>
	);
};

const Button = styled(Submit)`
	display: flex;
	color: ${colors.light};
	width: 190px;
	height: 40px;
	font-size: 14px;
	border-radius: 25px;
	border: 2px solid ${colors.secondary};
	background-color: ${(props) =>
		props.primary ? colors.secondary : colors.primary};
	:hover {
		background-color: ${colors.primary};
		opacity: 0.5;
	}
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export default Button;
