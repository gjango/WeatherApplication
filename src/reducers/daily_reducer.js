import {FETCH_DAILY} from '../actions/daily';

export default function(state=[],action) {
    switch(action.type){
        case FETCH_DAILY:
            return [action.payload.data];
    }

    return state;
}