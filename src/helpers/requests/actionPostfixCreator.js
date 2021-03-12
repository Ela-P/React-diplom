import { POSTFIXES } from '../../constants/actionPostfixes';

const  {REQUEST_POSTFIX } = POSTFIXES;

const createActionWithPostfix = (action, paylaod, postfix) => {
    return {
        type: action.type.slice(0, action.type.length - REQUEST_POSTFIX.length) + postfix,
        payload: { response: paylaod.response, actionPayload: paylaod.actionPayload },
    };
};

export default createActionWithPostfix;
