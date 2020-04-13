import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Icons
import { FiChevronLeft } from 'react-icons/fi'

// Grid
import { Container, Row, Col } from '../../styles/grid'

// Styles
import { Checkout, SectionCard, Content, Button } from './styles'

// Components
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import Summary from '../../components/summary'
import StatusStep from '../../components/status-steps'
import Input from '../../components/input'
import Select from '../../components/select'
import CreditCard from '../../components/credit-card'

// Images
import IconCard from '../../assets/images/icon-card.svg'

export default class index extends Component {
    state = {
        cardNumber: '',
        cardName: '',
        cardValidate: '',
        cardCVV: '',
        cardFlip: false,
        flag: '',
        dataParcels: [],
        parcelId: 0
    }

    componentDidMount() {
        this.parcels()
    }

    render() {
        return <Checkout>
            <Navigation />

            <Container>
                <Row>
                    <Col>
                        <Row>
                            <SectionCard>
                                <Link className="link" to="#!">
                                    <FiChevronLeft />
                                    <span>Alterar forma de pagamento</span>
                                </Link>

                                <div className="step">
                                    <strong>Etapa 2</strong> de 3
                                </div>

                                <div className="box-title">
                                    <img src={IconCard} alt="Icon Card" />

                                    <span className="text">
                                        Adicione um novo cartão de crédito
                                    </span>
                                </div>

                                <CreditCard
                                    flag={this.state.flag}
                                    cardFlip={this.state.cardFlip}
                                    cardNumber={this.state.cardNumber}
                                    cardName={this.state.cardName}
                                    cardValidate={this.state.cardValidate}
                                    cardCVV={this.state.cardCVV}
                                />
                            </SectionCard>

                            <Content>
                                <StatusStep stepNumber={1} />

                                <form>
                                    <Row>
                                        <Col xs={12}>
                                            <Input
                                                id="cardNumber"
                                                ref={ref => this.cardNumberInput = ref}
                                                label="Número do cartão"
                                                onChange={e => this.setState({ cardNumber: e.target.value })}
                                                value={this.state.cardNumber}
                                                validate={() => this.getCardFlag(this.state.cardNumber)}
                                                errorMessage="Número de cartão inválido"
                                                mgBottom={20}
                                                mask="9999 9999 9999 9999"
                                            />
                                        </Col>

                                        <Col xs={12}>
                                            <Input
                                                id="cardName"
                                                ref={ref => this.cardNameInput = ref}
                                                label="Nome (igual ao cartão)"
                                                onChange={e => this.setState({ cardName: e.target.value })}
                                                value={this.state.cardName}
                                                validate={this.isCardNameFilled}
                                                errorMessage="Insira seu nome completo"
                                                mgBottom={20}
                                                maxLength={18}
                                                uppercase
                                            />
                                        </Col>

                                        <Col xs={6} className="validate">
                                            <Input
                                                id="cardValidate"
                                                ref={ref => this.cardValidateInput = ref}
                                                label="Validade"
                                                onChange={e => this.setState({ cardValidate: e.target.value })}
                                                value={this.state.cardValidate}
                                                validate={this.isCardValidateFilled}
                                                errorMessage="Data inválida"
                                                mgBottom={20}
                                                mask="99/99"
                                            />
                                        </Col>

                                        <Col xs={6} className="cvv">
                                            <Input
                                                id="cardCVV"
                                                ref={ref => this.cardCVVInput = ref}
                                                label="CVV"
                                                onChange={e => this.setState({ cardCVV: e.target.value })}
                                                onFocus={() => this.setState({ cardFlip: true })}
                                                value={this.state.cardCVV}
                                                validate={this.isCardCVVFilled}
                                                errorMessage="Código inválido"
                                                mgBottom={20}
                                                mask={this.state.flag === 'amex' || this.state.flag === 'discover' ? '9999' : '999'}
                                                info
                                            />
                                        </Col>

                                        <Col xs={12}>
                                            <Select
                                                id="parcelas"
                                                placeholder="Número de parcelas"
                                                value={this.state.dataParcels.find(parcel => parcel.id === this.state.parcelId)}
                                                data={this.state.dataParcels}
                                                onSelect={parcelId => this.setState({ parcelId })}
                                                validate={this.isParcelsFilled}
                                                errorMessage="Insira o número de parcelas"
                                                mgBottom={40}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="align-button">
                                        <Col xs="auto">
                                            <Button>Continuar</Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Content>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </Checkout>
    }

    // ============================================
    //                                    Functions
    // ============================================
    parcels() {
        for (let i = 0; i < 12; i++) {
            let price = 12000
            let value = i + 1

            this.state.dataParcels.push({
                id: value,
                name: `${value}x ${
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(price / value)} sem juros`
            })
        }
    }

    getCardFlag(cardNumber) {
        let checkCard = cardNumber.replace(/[^0-9]+/g, '')
        let flag = ''

        let cards = {
            visa: /^4[0-9]{12}(?:[0-9]{3})/,
            mastercard: /^5[1-5][0-9]{14}/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
            amex: /^3[47][0-9]{13}/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
            hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
            elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}/,
            aura: /^(5078\d{2})(\d{2})(\d{11})$/
        }

        for (let itemflag in cards) {
            if (cards[itemflag].test(checkCard)) {
                flag = itemflag
            }
        }

        this.setState({ flag })

        return flag
    }

    formValidate(e) {
        e.preventDefault()

        if (
            !this.getCardFlag(this.state.cardNumber) ||
            !this.isCardNameFilled() ||
            !this.isCardValidateFilled() ||
            !this.isCardCVVFilled()) {

            this.cardNumberInput.checkValidate()
            this.cardNameInput.checkValidate()
            this.cardValidateInput.checkValidate()
            this.cardCVVInput.checkValidate()
            return
        }

        this.presenter.loadRegisterCard(
            {
                cardHolder: this.state.cardName,
                brand: this.state.flag,
                number: this.state.cardNumber.replace(/\s/g, ''),
                cvv: this.state.cardCVV,
                expiration: this.state.cardValidate
            }
        )
    }

    // Validation of Card
    isCardNameFilled = () => {
        return this.state.cardName.length > 0
    }

    isCardValidateFilled = () => {
        return this.state.cardValidate.length > 4
    }

    isCardCVVFilled = () => {
        this.setState({ cardFlip: false })

        if (this.state.flag === 'amex' || this.state.flag === 'discover') {
            return this.state.cardCVV.length > 3
        } else {
            return this.state.cardCVV.length > 2
        }
    }

    isParcelsFilled = () => {
        return this.state.parcelId > 0
    }
}
