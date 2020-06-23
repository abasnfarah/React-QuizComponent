import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false,
    }
  }

  handleClick(buttonText){
    console.log("quiz_question pressed");

    if(buttonText === this.props.quiz_question.answer){
      this.props.showNextQuestionHandler();
      this.setState({
        incorrectAnswer: false,
      })
    }else{
      this.setState({
        incorrectAnswer: true,
      })
    }

    console.log(this.state.incorrectAnswer);

    
  }

  render() {
    return (
      <main>
        {this.state.incorrectAnswer ? <p className="error" >Sorry, that's not right</p> : null}
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((question, index) => (
              <QuizQuestionButton key={index} button_text={question} clickHandler={this.handleClick.bind(this)}/>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
