import React from 'react';
import '../App.css';
import { SwitchButton, CalculatorButtons, WallButtons } from './ButtonComponents';

class Calculator extends React.Component {
  state = {
    displayText: '0',
    currentOperator: null,
    currentTotal: 0,
    currentNum: '0',
    waitingForOperand: true,
    wideView: false,
    partyMode: false
  }
  
  handleWideView = () => {
    this.setState((prevState) => ({ wideView: !prevState.wideView }));
  }

  handlePartyMode = () => {
    this.setState((prevState) => ({ partyMode: !prevState.partyMode }));
  }

  handleClear = () => {
    this.setState({
      displayText: '0',
      currentOperator: null,
      currentTotal: 0    ,
      currentNum: '0',
      waitingForOperand: true
    });
  }
  
  handleNumber = (num) => {
    this.updateState(num, false);
  }

  handleOperator = (newOperator) => {
    this.updateState(newOperator, true);
  }

  updateState = (input, isOperator) => {
    const { displayText, currentNum, waitingForOperand, currentOperator, currentTotal } = this.state;
    let newState = {};

    if (isOperator) {
      newState = {
        displayText: waitingForOperand
          ? input === '-'
            ? displayText + input
            : displayText.slice(0, -1) + input
          : displayText + input,
        currentOperator: waitingForOperand ? (input !== '-' ? input : currentOperator) : input,
        currentTotal: waitingForOperand ? currentTotal : String(this.performCalculation()),
        currentNum: waitingForOperand ? (input === '-' ? input : '0') : '0',
        waitingForOperand: true,
      };
    } else {
      newState = {
        displayText: displayText === '0' ? String(input) : displayText + String(input),
        currentNum: currentNum === '-' || !waitingForOperand ? currentNum + String(input) : String(input),
        waitingForOperand: false,
      };
    }

    this.setState(newState);
  };

  handleEqual = () => {
    this.setState({
      displayText: String(this.performCalculation()),
      currentNum: String(this.performCalculation()),
      currentTotal: String(this.performCalculation()),
      waitingForOperand: false,
      currentOperator: null
    });
  }

  handleDecimal = () => {
    const { displayText, currentNum } = this.state;
    if(!currentNum.match(/\./))
      this.setState({
        displayText: displayText+'.',
        currentNum: currentNum+'.'
      });
  }
    
  performCalculation = () => {
    const { currentNum, currentOperator, currentTotal } = this.state;
    const prevInput = parseFloat(currentTotal);
    const nextInput = parseFloat(currentNum);

    switch (currentOperator) {
      case '+':
        return prevInput + nextInput;
      case '-':
        return prevInput - nextInput;
      case '*':
        return prevInput * nextInput;
      case '/':
        if (nextInput === 0) {
          return 'Error';
        }
        return prevInput / nextInput;
      default:
        return nextInput;
    }
  };
  
  render() {
    const { wideView, partyMode } = this.state;
    const calculatorStyle = {
      width: wideView ? 'auto' : '340px',
      margin: wideView ? 'auto 0' : 'auto'
    };
    const wallButtonsStyle = {
      position: partyMode ? 'static' : 'relative'
    };

    return (
      <div id="canvas">
        <div className="row-container">
          <SwitchButton id="calc-mode" description="Wide View" onClick={this.handleWideView} />
          <SwitchButton id="party-mode" description="Party Mode" onClick={this.handlePartyMode}/>
        </div>
        <div id="calculator" style={calculatorStyle}>
          <div id="display" data-testid="display" >{this.state.displayText}</div>
          <div id="buttons" className="container">
            <CalculatorButtons id="clear" input="AC" onClick={() => {this.handleClear()}}/>
            <div className="row g-2">
              <CalculatorButtons id="seven" input={7} onClick={() => {this.handleNumber(7)}}/>
              <CalculatorButtons id="eight" input={8} onClick={() => {this.handleNumber(8)}}/>
              <CalculatorButtons id="nine" input={9} onClick={() => {this.handleNumber(9)}}/>
            </div>
            <div className="row g-2">
              <CalculatorButtons id="four" input={4} onClick={() => {this.handleNumber(4)}}/>
              <CalculatorButtons id="five" input={5} onClick={() => {this.handleNumber(5)}}/>
              <CalculatorButtons id="six" input={6} onClick={() => {this.handleNumber(6)}}/>
            </div>
            <div className="row g-2">
              <CalculatorButtons id="one" input={1} onClick={() => {this.handleNumber(1)}}/>
              <CalculatorButtons id="two" input={2} onClick={() => {this.handleNumber(2)}}/>
              <CalculatorButtons id="three" input={3} onClick={() => {this.handleNumber(3)}}/>
            </div>
            <div className="row g-2">
              <CalculatorButtons id="zero" input={0} onClick={() => {this.handleNumber(0)}}/>
              <CalculatorButtons id="decimal" input="." onClick={() => {this.handleDecimal()}}/>
            </div>
          </div>
        </div>
        <div id="wall" className="container g-0 w-100">
          <div className="row g-0">
            <WallButtons id="divide" input="/" onClick={() => {this.handleOperator('/')}} buttonStyle={wallButtonsStyle} />
            <WallButtons id="multiply" input="*" onClick={() => {this.handleOperator('*')}} buttonStyle={wallButtonsStyle} />
            <WallButtons id="subtract" input="-" onClick={() => {this.handleOperator('-')}} buttonStyle={wallButtonsStyle} />
            <WallButtons id="add" input="+" onClick={() => {this.handleOperator('+')}} buttonStyle={wallButtonsStyle} />
          </div>
          <WallButtons id="equals" input="=" onClick={() => {this.handleEqual()}} buttonStyle={wallButtonsStyle} />
        </div>
        <footer><p>by gitped</p></footer>
      </div>
    )
  }
}

export default Calculator;
