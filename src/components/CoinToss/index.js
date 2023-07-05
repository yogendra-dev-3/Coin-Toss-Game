// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onChangeToss = () => {
    const randomNumber = Math.floor(Math.random() * 2)

    if (randomNumber === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {image, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="toss-image" />
          <button type="button" className="button" onClick={this.onChangeToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
