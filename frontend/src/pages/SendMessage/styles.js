import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
	display: flex;
	color: ${colors.light};
	font-size: 1.2em;
	margin-top: 350px;
	align-items: center;
	flex-direction: column;
`;

export const ContainerButton = styled.div`
	display: flex;
	margin-top: 10px;
	flex-direction: row;
`;

export const Div = styled.div`
	margin-left: 80px;
`;
