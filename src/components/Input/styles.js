import styled from 'styled-components'
import { Colors } from '../../styles/styleds'

export const BoxInput = styled.div `
	height: 65px;
	margin-bottom: ${props => props.mgBottom ? props.mgBottom : 0}px;
	position: relative;

	label {
		align-items: center;
		color: ${Colors.silver};
		display: flex;
		font-size: 17px;
		line-height: 22px;
		pointer-events: none;
		position: absolute;
		top: 25px;
		transition: .25s ease-in-out;

		.info {
			align-items: center;
			background-color: ${Colors.silver};
			border-radius: 50%;
			color: ${Colors.white};
			display: flex;
			font-size: 9px;
			height: 13px;
			justify-content: center;
			margin-left: 10px;
			width: 13px;
		}
	}

	input {
		background-color: transparent;
		border-bottom: 1px solid;
		color: ${Colors.grey};
		display: block;
		font-size: 17px;
		line-height: 22px;
		padding: 20px 0 5px;
		width: 100%;

		&:focus {
			&~label {
				font-size: 13px;
				top: 0;
			}
		}

		&:valid {
			&~label {
				font-size: 13px;
				top: 0;
			}
		}
	}

	button {
		background: transparent;
		cursor: pointer;
		height: 20px;
		opacity: .4;
		position: absolute;
		right: 4px;
		top: 26px;
		width: 20px;
	}

	.error {
		color: ${Colors.danger};
		font-size: 13px;
		margin-top: 5px;
	}
`
