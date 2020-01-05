/* eslint-disable import/no-unresolved */
import React, { useEffect, useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, PageHeader, Layout, Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { getAuth, login } from '../actions/user';

interface IRootState {
    user?: any;
}

const Login: React.FC<IRootState> = () => {
    const auth = (user: IRootState) => user.user;
    const authenticated = useSelector(auth);

    const [state, setState] = useState({ email: '', password: '' });
    const dispatch = useDispatch();

    const setLogin = useCallback(
        (email: string, password: string) => {
            dispatch(login(email, password));
        },
        [dispatch]
    );

    useEffect(() => {
        dispatch(getAuth());
    }, [dispatch, setLogin]);

    if (authenticated.user.authenticate) {
        return <Redirect to="/main" />;
    }

    console.log(authenticated);

    return (
        <Layout style={{ height: '100%' }}>
            <Row>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    backIcon={false}
                    title="Pets"
                />
            </Row>
            <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: 'calc(100% - 66px)' }}
            >
                <Col span={8}>
                    <h2>LOGIN</h2>
                    <Form
                        className="login-form"
                        style={{ border: '1px solid #ccc', padding: 50 }}
                    >
                        <Form.Item>
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder="Username"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setState({
                                        ...state,
                                        email: event.target.value,
                                    })
                                }
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                type="password"
                                placeholder="Password"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setState({
                                        ...state,
                                        password: event.target.value,
                                    })
                                }
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                onClick={() =>
                                    setLogin(state.email, state.password)
                                }
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Layout>
    );
};

export default Login;
