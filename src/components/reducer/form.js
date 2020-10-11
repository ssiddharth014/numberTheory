import {FORM_SUBMIT_REQUEST,FORM_SUBMIT_SUCCESS,FORM_SUBMIT_FAIL} from '../constants/form'


function FormSubmitReducer(state ={}, action) {
    switch (action.type) {
      case FORM_SUBMIT_REQUEST:
        return { loading: true};
      case FORM_SUBMIT_SUCCESS:
        return { loading: false, form_submit_data: action.payload };
      case FORM_SUBMIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
export {FormSubmitReducer}