const React = require('react')

class EyesOnMe extends React.Component {


  render() {
    return (
      <button onFocus={()=>console.log('Good!')} onBlur={()=>console.log('Hey! Eyes on me!')} />
    )
  }
}

module.exports = EyesOnMe
