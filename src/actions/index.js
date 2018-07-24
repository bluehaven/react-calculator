import * as ActionTypes from '../utils/actionTypes';

export const OnNumClick = ( number ) => ({
   type: ActionTypes.INPUT_NUMBER,
    number
});

export const OnPlusClick = () => ({
    type: ActionTypes.PLUS
});