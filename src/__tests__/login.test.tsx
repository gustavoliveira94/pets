/* eslint-disable no-undef */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import Login from '../pages/login';

jest.mock('react-redux');

test('testing login form', () => {
    const dispatch = jest.fn();
    const history = createMemoryHistory();
    history.push('/login');

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(
        <Router history={history}>
            <Login />
        </Router>
    );

    expect(history.location.pathname).toBe('/login');

    fireEvent.change(getByTestId('email'), {
        target: { value: 'usuario-test@adopets.com' },
    });
    fireEvent.change(getByTestId('password'), {
        target: { value: '123123' },
    });
    fireEvent.click(getByTestId('login'));
    history.push('/');
    expect(history.location.pathname).toBe('/');
});
