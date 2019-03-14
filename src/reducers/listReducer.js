import {FETCH_LIST,LIST_ADD} from '../actions/type';

const initialState = {
    data: [],
};

export default (state=initialState,action)=> {
    const oldList = state.data;
    switch (action.type){
        case FETCH_LIST:
            return Object.assign({},state,{data:action.payload});
        case LIST_ADD:
            const {title,body} = action.payload;
            return {state,data: oldList.push({userId: 1,id: oldList.length +1,title,body})};
        default: return state;
    }
}