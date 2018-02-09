import React, {Component} from 'react';

class CourseState extends Component {
  state = {
    goal: 301,
    status: 279,
    section: 17,
    lecture: 13,
    sections: [
      {num: 13, lectures: [1, 2, 12, 8, 6, 4, 8, 4, 8, 1, 5, 2, 8, 1, 2]},
      {num: 14, lectures: [1, 2, 3, 5, 7, 7, 3, 4, 8, 6, 4, 3, 13, 9, 5, 10, 5, 8, 2]},
      {num: 15, lectures: [6, 4, 2, 7, 10, 6, 4, 9, 3]},
      {num: 16, lectures: [1, 8, 8, 2, 4, 6, 8, 7, 6, 3, 7, 3, 2, 2, 1]},

      {num: 17, lectures: [1, 3, 3, 6, 4, 8, 5, 2, 7, 4, 6, 4, 3, 5, 9, 2, 14, 1, 8, 8, 1]},
      {num: 18, lectures: [1, 3, 1, 13, 7, 7, 6, 9, 6, 7, 11, 8, 7, 8, 13, 15, 7, 3, 5, 8, 1]},
      {num: 19, lectures: [1, 6, 7, 2, 3, 4, 5, 1]},
      {num: 20, lectures: [1, 3, 2, 3, 13, 4, 7, 3, 7, 5, 2]},
      {num: 21, lectures: [1, 3, 2, 4, 1]},
      {num: 22, lectures: [1, 1, 3, 2, 4, 3, 11, 2, 7, 3, 5, 6, 4, 5, 4, 6, 1]},
      {num: 23, lectures: [1, 3, 6, 4, 3, 3, 2, 10, 3]},
      {num: 24, lectures: [1, 6, 5, 6, 4, 12, 3, 3, 3, 3, 5, 3, 7, 5, 2]},
      {num: 25, lectures: [2, 3, 6, 5, 6, 10, 11, 6, 7, 13, 1, 7]},
      {num: 26, lectures: [25]},
      {num: 27, lectures: [1, 1, 1, 3, 2, 3, 3, 6, 1]}
    ]
  };

  render() {
    const status = this.state.status + this.state.lecture;
    const goal = this.state.goal - status;
    const goalElement = goal > 0 ? <div>Goal: {goal}</div> : <div>Bonus: {-goal}</div>;

    return (
      <div>
        <div>Status: {(status / 423 * 100).toFixed(1)}%</div>
        {goalElement}
        {this.state.sections.map(section => {
          return section.num < this.state.section ? (
            <div>
              {section.num}. Section: 0 hour
            </div>
          ) : section.num === this.state.section ? (
            <div style={{color: 'red'}}>
              {section.num}. Section: {(section.lectures.splice(this.state.lecture, section.lectures.length).reduce(
              function (cnt, o) {
                return cnt + o;
              }, 0
            ) / 60).toFixed(2)} hour
            </div>
          ) : (
            <div>
              {section.num}. Section: {(section.lectures.reduce(function (cnt, o) {
              return cnt + o;
            }, 0) / 60).toFixed(2)} hour
            </div>
          );
        })}
      </div>
    );
  }
}

export default CourseState;

// kimaradtak:
// 251 talán az egyik practicet használta fel
// 252
