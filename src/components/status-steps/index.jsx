import React, { Component } from 'react'
import { FiChevronRight } from 'react-icons/fi'

// Styles
import { Steps } from './styles'

// Images
import Check from '../../assets/images/check.svg'

export default class StatusStep extends Component {
  render() {
    return (
      <Steps>
        <li className={(this.props.stepNumber > 0) ? 'item active' : 'item'}>
          <div className="circle">
            <img src={Check} alt="Check"/>
            <span>1</span>
          </div>

          <span className="text">Carrinho</span>

          <FiChevronRight size={20} />
        </li>

        <li className={(this.props.stepNumber > 1) ? 'item active' : 'item'}>
          <div className="circle">
            <img src={Check} alt="Check" />
            <span>2</span>
          </div>

          <span className="text">Pagamento</span>

          <FiChevronRight size={20} />
        </li>
        
        <li className={(this.props.stepNumber > 2) ? 'item active' : 'item'}>
          <div className="circle">
            <img src={Check} alt="Check" />
            <span>3</span>
          </div>

          <span className="text">Confirmação</span>
        </li>
      </Steps>
    )
  }
}
