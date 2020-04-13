import React, { Component } from 'react'

// Styles
import { Card } from './styles'

// Images
import Diners from '../../assets/images/flags/diners.png'
import Discover from '../../assets/images/flags/discover.png'
import Elo from '../../assets/images/flags/elo.png'
import Hipercard from '../../assets/images/flags/hipercard.png'
import Mastercard from '../../assets/images/flags/master.png'
import Visa from '../../assets/images/flags/visa.png'
import BgFront from '../../assets/images/bg-card-front.svg'
import BgBack from '../../assets/images/bg-card-back.svg'

export default class CreditCard extends Component {
    render() {
        return <Card>

            <div className={this.props.cardFlip ? 'credit-card-box rotate' : 'credit-card-box'}>

                <div className="flip">

                    <div className="front">
                        <img src={BgFront} alt="front"/>
                        <div className="flags">
                            {this.handleFlag()}
                        </div>

                        <p className="number">
                            {this.props.cardNumber}
                        </p>

                        <p className="name">
                            {this.props.cardName}
                        </p>

                        <p className="validate">
                            {this.props.cardValidate}
                        </p>
                    </div>


                    <div className="back">
                        <img src={BgBack} alt="back" />

                        <p className="cvv">{this.props.cardCVV || '***'}</p>
                    </div>

                </div>

            </div>

        </Card>
    }

    // ==========================================
    //                                  Functions
    // ==========================================
    handleFlag() {
        switch (this.props.flag) {
            case 'visa':
                return <img src={Visa} alt={Visa} />

            case 'mastercard':
                return <img src={Mastercard} alt={Mastercard} />

            case 'diners':
                return <img src={Diners} alt={Diners} />

            case 'discover':
                return <img src={Discover} alt={Discover} />

            case 'elo':
                return <img src={Elo} alt={Elo} />

            case 'hipercard':
                return <img src={Hipercard} alt={Hipercard} />

            default:
                break
        }
    }
}
