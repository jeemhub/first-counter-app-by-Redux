import { ADDNUM, DATA, DECREMENT, INCREMENT } from "../Action/Type";

const counterReducers = (state = {counter:0,data:'',}, action) => {
    switch (action.type) {
        case INCREMENT: return ({ ...state, counter: state.counter + 1 });
        case DECREMENT: return ({ ...state, counter: state.counter - 1 });
        case DATA: return ({ ...state, data: action.data});
        case ADDNUM: return ({ ...state, counter: state.counter + +action.data});
        default: return state;
    }
}
export default counterReducers;