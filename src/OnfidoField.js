import React from 'react'
import Onfido from 'onfido-sdk-ui'

class OnfidoField extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign({}, this.state, nextProps))
  }
  componentDidMount() {
    //console.log('this.state.onfidoToken', this.state.onfidoToken)
    if (this.state.onfidoToken) {
      console.log('INITTING ONFIDO', document.getElementById('onfido-button'), document.getElementById('onfido-button'))
      Onfido.init({
        useModal: true,
        token: this.state.onfidoToken,
        containerId: 'onfido-mount',
        buttonId: 'onfido-button',
        steps: [
          'welcome',
          'document',
          'complete'
        ],
        onComplete: function () {
          console.log("everything is complete")
        }
      })
    }
  }
  render({ onfidoToken } = this.state) {
    return (
      <div>
        <button id='onfido-button' disabled></button>
      </div>
    )
  }
}

export default OnfidoField