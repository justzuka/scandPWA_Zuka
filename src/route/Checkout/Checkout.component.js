import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";

import { MyProgressBar } from "Src/MyProgressBar/MyProgressBar.component";
import ContentWrapper from "SourceComponent/ContentWrapper";
class Checkout extends SourceCheckout {
  render() {
    const { checkoutStep, history } = this.props;
    const { url } = this.stepMap[checkoutStep];
    const arr = Object.keys(this.stepMap);
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == checkoutStep) {
        j = i + 1;
        break;
      }
    }
    let nameArray = [];
    nameArray.push("-1");
    for (let i = 0; i < arr.length; i++) {
      nameArray.push(this.stepMap[arr[i]].title);
    }
    console.log(nameArray);

    return (
      <>
        <MyProgressBar
          nameArray={nameArray}
          currentStepElement={j}
          allSteps={arr.length}
        />
        <main block="Checkout">
          <ContentWrapper
            wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
            label={__("Checkout page")}
          >
            {this.renderSummary(true)}
            <div block="Checkout" elem="Step">
              {this.renderTitle()}
              {this.renderGuestForm()}
              {this.renderStep()}
              {this.renderLoader()}
            </div>
            <div>
              {this.renderSummary()}
              {this.renderPromo()}
              {this.renderCoupon()}
            </div>
          </ContentWrapper>
        </main>
      </>
    );
  }
}

export default Checkout;
