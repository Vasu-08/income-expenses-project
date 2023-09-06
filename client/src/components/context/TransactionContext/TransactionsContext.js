import React, {createContext, useReducer} from 'react';
import axios from 'axios';
import {TRANSACTION_CREATION_SUCCESS, TRANSACTION_CREATION_FAIL, TRANSACTION_FETCH_SUCCESS, TRANSACTION_FETCH_FAIL} from './transactionsActionTypes';
import {API_URL_TRANSACTION} from '../../../utils/apiURL';

export const TransactionsContext = createContext();

const INITIAL_STATE = {
  transaction: null,
  transactions: [],
  loading: false,
  error: null,
  token: JSON.parse(localStorage.getItem('userAuth'))
};
const reducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case TRANSACTION_CREATION_SUCCESS:
      return {
        ...state,
        loading: false,
        transaction: payload
      };

    case TRANSACTION_CREATION_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case TRANSACTION_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        transactions: payload
      };

    case TRANSACTION_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        transactions: null
      };

    default:
      return state;
  }
};

export const TransactionContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  //create account
  const createTransactionAction = async accountData => {
    try {
      //header
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state?.token?.token}`
        }
      };
      //request
      const res = await axios.post(API_URL_TRANSACTION, accountData, config);

      if (res?.data?.status === 'success') {
        dispatch({type: TRANSACTION_CREATION_SUCCESS, payload: res?.data?.data});
      }

      window.alert('Transaction created successfully');
      window.location.reload();
    } catch (error) {
      dispatch({
        type: TRANSACTION_CREATION_FAIL,
        payload: error?.response?.data?.message
      });
    }
  };

  const getAllTransactionsAction = async accountID => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state?.token?.token}`
        }
      };
      
      const res = await axios.get(`${API_URL_TRANSACTION}/accountTransactions/${accountID}`, config);

      if (res?.data?.status === 'success') {
        dispatch({type: TRANSACTION_FETCH_SUCCESS, payload: res?.data?.data});
      }
    } catch (error) {
      dispatch({
        type: TRANSACTION_FETCH_FAIL,
        payload: error?.response?.data?.message
      });
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        transaction: state.transaction,
        transactions: state.transactions,
        createTransactionAction,
        getAllTransactionsAction,
        error: state?.error
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
