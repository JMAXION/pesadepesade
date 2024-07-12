import { setCartList } from '../reducers/cartsReducer.js';
import { axiosGet, axiosPost } from './reduxAxios.js';

export function cartListAxios({userId}) {
     const url = 'http://localhost:8080/cart';
     const data = { userId }

     return async(dispatch) => {
          const clist = await axiosPost({url, data});
          dispatch(setCartList({clist}))
     }

}