import React, { Component } from 'react'

import { Container } from './styles'
import { ListItem, ListFigure, ListDescription } from '../Block'

export default class CartBox extends Component {
  render() {
    return (
      <Container>
        <ListItem className={this.props.condensed ? 'condensed' : ''}>
          <ListFigure src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
          <ListDescription
            showPrice={this.props.condensed ? false : true}
            text="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium"
            price="R$ 225,90"
          />
        </ListItem>

        <ListItem className={this.props.condensed ? 'condensed' : ''}>
          <ListFigure src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg" />
          <ListDescription
            showPrice={this.props.condensed ? false : true}
            text="Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml"
            price="R$ 299,00"
          />
        </ListItem>

        <ListItem className={this.props.condensed ? 'condensed' : ''}>
          <ListFigure src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png" />
          <ListDescription
            showPrice={this.props.condensed ? false : true}
            text="Senscience Inner Restore Intensif - Máscara Capilar 50ml"
            price="R$ 99,90"
          />
        </ListItem>
      </Container>
    )
  }
}
