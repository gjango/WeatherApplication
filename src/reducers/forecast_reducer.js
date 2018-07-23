import {FETCH_FORECAST} from '../actions/forecast';

export default function(state=[],action){

    switch(action.type){
        case FETCH_FORECAST:
            return [action.payload.data];
    }

    return state;
}