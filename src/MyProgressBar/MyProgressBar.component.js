import { PureComponent } from "react";
import "./MyProgressBar.style.css";
export class MyProgressBar extends PureComponent {
  render() {
    const { allSteps, currentStepElement, nameArray } = this.props;

    let arr = [];
    arr.push(-1);
    for (let i = 0; i < allSteps; i++) {
      arr.push(i + 1);
    }

    return (
      <div className="MyProgressBarContainer">
        <div className="ProgressContainer">
          <div
            className="Progress"
            style={{
              width: (currentStepElement / allSteps) * 100 + "%",
            }}
          ></div>
          <div className="Circles">
            {arr.map((element, index) => {
              const b = element <= currentStepElement;
              return (
                <div
                  className={`OuterCircle ${index === 0 && "DoNotDisplay"} 
                  ${index === allSteps && "DoNotDisplay"}`}
                >
                  <div className={`Circle ${b && "Active"}`}>
                    <div>{element}</div>
                    <div className="Names">{nameArray[element]}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MyProgressBar;
