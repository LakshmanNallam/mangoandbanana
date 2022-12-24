import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {forMangos: {count1: 0}, forBananas: {count2: 0}}

  onMangosClick = () => {
    this.setState(prevState => ({
      forMangos: {count1: prevState.forMangos.count1 + 1},
      forBananas: {count2: prevState.forBananas.count2},
    }))
  }

  onBananasClick = () => {
    this.setState(prevState => ({
      forMangos: {count1: prevState.forMangos.count1},
      forBananas: {count2: prevState.forBananas.count2 + 1},
    }))
  }

  render() {
    const {forMangos} = this.state
    const {count1} = forMangos
    const {forBananas} = this.state
    const {count2} = forBananas

    return (
      <div className="mainDiv">
        <div className="gameCon">
          <h1>
            Bob ate <span className="spanele">{count1}</span> mangoes{' '}
            <span className="spanele">{count2}</span> bananas
          </h1>
          <div className="imgCon">
            <div className="subImgcon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <button className="btnn" onClick={this.onMangosClick}>
                Eat Mango
              </button>
            </div>
            <div className="subImgcon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <button className="btnn" onClick={this.onBananasClick}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
