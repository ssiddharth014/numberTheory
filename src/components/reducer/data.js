import {DATA_INDIA_REQUEST,DATA_INDIA_SUCCESS,DATA_INDIA_FAIL,
    DATA_WORLD_REQUEST,DATA_WORLD_SUCCESS,DATA_WORLD_FAIL,SOCKET_FAIL,SOCKET_SUCCESS} from '../constants/data'


function IndiaDataReducer(state ={}, action) {
    switch (action.type) {
      case DATA_INDIA_REQUEST:
        return { loading: true};
      case DATA_INDIA_SUCCESS:
        console.log("red",action.payload)
        return { loading: false, data: action.payload };
      case DATA_INDIA_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function WorldDataReducer(state ={}, action) {
    switch (action.type) {
      case DATA_WORLD_REQUEST:
        return { loading_world: true};
      case DATA_WORLD_SUCCESS:
        console.log("red1",action.payload)
        return { loading_world: false, dataWorld: action.payload };
      case DATA_WORLD_FAIL:
        return { loading_world: false, error_world: action.payload };
      default:
        return state;
    }
  }
  function SocketReducer(state={},action){
    switch (action.type) {

        case SOCKET_SUCCESS:
          console.log("red1",action.payload)
          return { loading: false, data: action.payload };
        case SOCKET_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }

  }

  export {IndiaDataReducer,WorldDataReducer,SocketReducer}