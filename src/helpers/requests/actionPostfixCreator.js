import { POSTFIXES } from '../../constants/actionPostfixes';

const  {REQUEST_POSTFIX } = POSTFIXES;

const createActionWithPostfix = (action, paylod, postfix) => {
    return {
        type: action.type.slice(0, action.type.length - REQUEST_POSTFIX.length) + postfix,
        paylod: { response: paylod.response, actionPayload: paylod.actionPayload },
    };
};

export default createActionWithPostfix;
