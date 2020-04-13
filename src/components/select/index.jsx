import React, { Component } from 'react'
import { FiChevronDown } from 'react-icons/fi'

// Styles
import { BoxSelect } from './styles'
import { Colors } from '../../styles/styleds'

export default class Select extends Component {
    state = {
        openSelect: false,
        selected: '',
        errorMessage: ''
    }

    componentDidMount() {
        if (this.props.value) {
            this.setSelected(this.props.value)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setSelected(this.props.value)
        }
    }

    render() {
        return <BoxSelect tabIndex="0"
            onBlur={() => {
                this.checkValidate()
                this.closeSelect()
            }}
            mgBottom={this.props.mgBottom}>

            <div id={this.props.id}
                className={this.state.openSelect ? 'selected open' : 'selected'}
                style={{ borderBottomColor: this.state.errorMessage ? Colors.danger : Colors.silver }}
                onClick={() => this.toggleSelect()}>

                <div className="item-selected">
                    {
                        this.state.selected ?
                            <span>{this.state.selected.name}</span>
                            : <span className="placeholder">{this.props.placeholder}</span>
                    }
                </div>

                <div className="arrow">
                    <FiChevronDown color={Colors.valencia} />
                </div>

            </div>


            <ul className={this.state.openSelect ? 'list-select open' : 'list-select'}>
                {
                    this.props.data.map(item => {
                        return <li
                            key={item.id}
                            id={item.id}
                            className={(this.state.selected.id === item.id) ? 'item check' : 'item'}
                            onClick={() => this.handleSelect(item.id, item.name)}>
                            {item.name}
                        </li>
                    })
                }
            </ul>

            {
                this.state.errorMessage &&
                <p className="error">{this.state.errorMessage}</p>
            }

        </BoxSelect>
    }

    // ==========================================
    //                                  Functions
    // ==========================================
    toggleSelect() {
        this.setState({ openSelect: !this.state.openSelect })
    }

    closeSelect() {
        this.setState({ openSelect: false })
    }

    handleSelect(id, name) {
        this.props.onSelect(id)

        this.setState({ selected: { id, name } }, () => {
            this.checkValidate()
            this.toggleSelect()
        })
    }

    checkValidate = () => {
        if (this.props.validate) {
            this.setState({
                errorMessage: this.props.validate() ?
                    ''
                    : this.props.errorMessage
            })
        }
    }

    setSelected(value) {
        this.setState({
            selected: {
                id: value.id,
                name: value.name
            }
        })
    }
}
