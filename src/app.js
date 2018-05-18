import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './action/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './action/filters';
import getVisibleExpenses from './selector/expenses';
import 'normalize.css/normalize.css';
import './style/style.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 30, createdAt: 3000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 100000, createdAt: 2000 }));
// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));