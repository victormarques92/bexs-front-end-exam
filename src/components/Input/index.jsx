import React, { Component } from 'react'
import { TiInfoLarge } from 'react-icons/ti'
import InputMask from 'react-input-mask'

// Styles
import { BoxInput } from './styles.js'
import { Colors } from '../../styles/styleds.js'

export default class Input extends Component {
	state = {
		type: this.props.type,
		errorMessage: ''
	}

	render() {
		return (
			<BoxInput mgBottom={this.props.mgBottom} uppercase={this.props.uppercase}>
				<InputMask id={this.props.id}
					type={this.state.type || 'text'}
					ref={input => { this.textInput = input }}
					value={this.props.value}
					onChange={this.props.onChange}
					onBlur={() => this.checkValidate()}
					onFocus={this.props.onFocus}
					onKeyPress={this.props.onKeyPress}
					mask={this.props.mask}
					maskChar=""
					maxLength={this.props.maxLength}
					style={{ borderBottomColor: this.state.errorMessage ? Colors.danger : Colors.silver }}
					required
				/>
				<label htmlFor={this.props.id}>
					{this.props.label}

					{
						this.props.info &&
						<div className="info">
							<TiInfoLarge />
						</div>
					}
				</label>

				{
					this.state.errorMessage &&
					<p className="error">{this.state.errorMessage}</p>
				}
			</BoxInput>
		)
	}

	// ============================================
	//                                    Functions
	// ============================================
	checkValidate() {
		if (this.props.validate) {
			this.setState({ errorMessage: this.props.validate() ? '' : this.props.errorMessage })
		}
	}
}
