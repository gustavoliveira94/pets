/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, PageHeader, Layout, Col, Pagination, Button } from 'antd';
import 'antd/dist/antd.css';

// Actions
import { getPets } from '../actions/pets';
import { logOut } from '../actions/user';

// Components
import Filter from '../components/filter';
import Pets from '../components/pets';
import Order from '../components/order';

interface IRootState {
    user?: any;
    pets?: any;
    page: number;
}

const Main: React.FC<IRootState> = () => {
    const dispatch = useDispatch();
    const petlist = (pets: IRootState) => pets.pets;
    const petslist = useSelector(petlist);
    const auth = (user: IRootState) => user.user;
    const authenticated = useSelector(auth);

    const [state, setState] = useState({
        sex: '',
        size: '',
        age: '',
        page: 1,
        order: '',
        visible: false,
    });

    useEffect(() => {
        dispatch(
            getPets(state.sex, state.age, state.size, state.page, state.order)
        );
    }, [dispatch, state]);

    const onChange = (page: number) => {
        setState({ ...state, page });
    };

    if (authenticated && !authenticated.user.authenticate) {
        return <Redirect to="/login" />;
    }

    console.log(authenticated);

    return (
        <Layout style={{ height: '100%' }}>
            <Row>
                <PageHeader
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: '2px solid rgb(224, 226, 228)',
                        paddingBottom: 15,
                    }}
                    backIcon={false}
                    title="Pets"
                    extra={[
                        <span key="0">
                            {`Olá, ${authenticated &&
                                authenticated.user.data.organization_user
                                    .first_name} ${authenticated &&
                                authenticated.user.data.organization_user
                                    .last_name}`}
                        </span>,
                        <Button
                            onClick={() => dispatch(logOut())}
                            key="1"
                            type="link"
                        >
                            Log out
                        </Button>,
                    ]}
                />
            </Row>
            {state.visible ? (
                <>
                    <Filter
                        getSex={(sex: string) =>
                            setState({ ...state, sex, size: '', age: '' })
                        }
                        getSize={(size: string) =>
                            setState({ ...state, size, sex: '', age: '' })
                        }
                        getAge={(age: string) =>
                            setState({ ...state, age, sex: '', size: '' })
                        }
                        reset={() =>
                            setState({ ...state, age: '', size: '', sex: '' })
                        }
                    />
                    <Order
                        setName={(name: string) =>
                            setState({ ...state, order: name })
                        }
                    />
                    <Button
                        onClick={() => setState({ ...state, visible: false })}
                        type="link"
                    >
                        Close options
                    </Button>
                </>
            ) : (
                <Button
                    onClick={() => setState({ ...state, visible: true })}
                    type="link"
                >
                    More options
                </Button>
            )}
            <Pets />
            <Row>
                <Col
                    span={24}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        padding: 40,
                    }}
                >
                    <Pagination
                        total={petslist && petslist.pets.pages * 10}
                        current={state.page}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </Layout>
    );
};

export default Main;
