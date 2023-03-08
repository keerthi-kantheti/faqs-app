// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    displayAnswer: false,
  }

  clickPlusOrMinusBtn = () => {
    this.setState(prev => ({displayAnswer: !prev.displayAnswer}))
  }

  render() {
    const {displayAnswer} = this.state
    const {itemDetails} = this.props
    const {id, questionText, answerText} = itemDetails
    const buttonImageUrl = displayAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const buttonImageAltText = displayAnswer ? 'minus' : 'plus'
    const hrClassName = displayAnswer
      ? 'horizontal-line-with-display'
      : 'horizontal-line-without-display'

    const ansTextClassName = displayAnswer
      ? 'answer-text-with-display'
      : 'answer-text-without-display'
    return (
      <li>
        <div className="list-container">
          <div className="faq-item-container2">
            <h1 className="question-text">{questionText}</h1>
            <button
              type="button"
              className="minus-btn"
              onClick={this.clickPlusOrMinusBtn}
            >
              <img src={buttonImageUrl} alt={buttonImageAltText} />
            </button>
          </div>
          <hr className={hrClassName} />
          <p className={ansTextClassName}>{answerText}</p>
        </div>
      </li>
    )
  }
}
export default FaqItem
