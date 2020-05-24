import React from 'react';
import styled from 'styled-components';

import { FiMessageCircle } from 'react-icons/fi';
import colors from '../styles/colors';

const StyledHeader = ({ className, children }) => {
	return (
		<div className={className}>
			<FiMessageCircle
				size={40}
				color={colors.secondary}
				style={{ marginRight: 10 }}
			/>
			<Text>EOSLEC Newsletter</Text>
		</div>
	);
};

const Header = styled(StyledHeader)`
	display: flex;
	height: 75px;
	border: 3px solid ${colors.secondary};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #4a4e69;
	border-radius: 0 0 15px 15px;
`;

const Text = styled.h1`
	display: flex;
	align-items: center;
	color: ${colors.secondary};
	font-size: 1.5em;
`;

export default Header;
