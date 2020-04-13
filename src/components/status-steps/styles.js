import styled from 'styled-components'
import { Colors } from '../../styles/styleds'

export const Steps = styled.ul `
	display: flex;
	justify-content: center;
	padding: 32px 16px;

	@media (max-width: 992px) {
		display: none;
	}

	.item {
		align-items: center;
		background-color: ${Colors.white};
		cursor: normal;
		color: ${Colors.valencia};
		display: flex;
		font-size: 13px;
		margin-left: 24px;
		
		.circle {
			align-items: center;
			border: 1px solid ${Colors.valencia};
			border-radius: 50%;
			display: flex;
			height: 22px;
			justify-content: center;
			margin-right: 8px;
			width: 22px;

			img {
				display: none;
			}
		}

		svg {
			margin-left: 16px;
		}
		
		&.active {
			.circle {
				background-color: ${Colors.valencia};
				color: ${Colors.white};

				img {
					display: block;
				}
				
				span {
					display: none;
				}
			}
			}

		&:first-of-type {
			margin-left: 0;

			&::before {
				width: 0;
			}
		}
	}
`
