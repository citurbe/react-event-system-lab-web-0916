const React = require('react')
class Keypad extends React.Component {

  constructor() {
    super();
    this.output = this.output.bind(this)
  }

  output() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.output} type="password" />
       )
  }
}
module.exports = Keypad
