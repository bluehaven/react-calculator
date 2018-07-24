import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import NumberButton from '../components/NumberButton';
import PlusButton from '../components/PlusButton';
import Result from '../components/Result';

class  CalculatorContainer  extends  Component  {
    render () {
        const {calculator, actions} = this.props;
        return (
            <div>
                <div>
                    < NumberButton n = {1} onClick={()=> actions.OnNumClick(1)} />
                    < NumberButton n = {2} onClick={()=> actions.OnNumClick(2)} />
                    < NumberButton n = {3} onClick={()=> actions.OnNumClick(3)} />
                </div>
                <div>
                    < NumberButton n = {4} onClick={()=> actions.OnNumClick(4)} />
                    < NumberButton n = {5} onClick={()=> actions.OnNumClick(5)} />
                    < NumberButton n = {6} onClick={()=> actions.OnNumClick(6)} />
                </div>
                <div>
                    < NumberButton n = {7} onClick={()=> actions.OnNumClick(7)} />
                    < NumberButton n = {8} onClick={()=> actions.OnNumClick(8)} />
                    < NumberButton n = {9} onClick={()=> actions.OnNumClick(9)} />
                </div>
                <div>
                    < NumberButton n = {0} onClick={()=> actions.OnNumClick(0)} />
                    < PlusButton onClick={actions.OnPlusClick} />
                </div>
                <div>
                    < Result result = {calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
   calculator: state.calculator
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);