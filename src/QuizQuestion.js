import React, {Component} from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_questions.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul> <li> 
            {this.props.quiz_questions.answer_options[0]}
          </li></ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
