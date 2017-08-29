// @flow
import { GETFOLDER } from '../actions/api';


export type apiStateType = {
  +json: {file?:Array<any>, type?: string, return?: number, message?: string, pseudo?: string, token?: string, token?: string, autorisation?: number}
};

type actionType = {
  +type: string,
  +type: {file?:Array<any>, type?: string, return?: number, message?: string, pseudo?: string, token?: string, token?: string, autorisation?: number}
};

export default function api(state: any = {file:[], type: "", return: 0, message: "", pseudo: "", token: "", token: "", autorisation: 0}, action: actionType) {
  switch (action.type) {
    case GETFOLDER:
      return state = action.json;
    default:
      return state;
  }
}
