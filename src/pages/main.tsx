/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, PageHeader, Layout, Card, Col, Pagination } from 'antd';
import 'antd/dist/antd.css';

import { getPets } from '../actions/pets';

import Filter from '../components/filter';

interface IRootState {
    user?: any;
    pets?: any;
    page: number;
}

const Main: React.FC<IRootState> = () => {
    const dispatch = useDispatch();
    const auth = (user: IRootState) => user.user;
    const authenticated = useSelector(auth);
    const petlist = (pets: IRootState) => pets.pets;
    const petslist = useSelector(petlist);

    const [state, setState] = useState({ sex: '', size: '', age: '', page: 1 });

    useEffect(() => {
        dispatch(getPets(state.sex, state.age, state.size, state.page));
    }, [dispatch, state]);

    const onChange = (page: number) => {
        setState({ ...state, page });
    };

    if (!authenticated.user.authenticate) {
        return <Redirect to="/login" />;
    }

    console.log(state);

    return (
        <Layout style={{ height: '100%' }}>
            <Row>
                <PageHeader
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: '2px solid rgb(235, 237, 240)',
                        paddingBottom: 15,
                    }}
                    backIcon={false}
                    title="Pets"
                />
            </Row>
            <Filter
                size={state.size}
                getSex={(sex: string) => setState({ ...state, sex })}
                getSize={(size: string) => setState({ ...state, size })}
                getAge={(age: string) => setState({ ...state, age })}
                reset={() => setState({ ...state, age: '', size: '', sex: '' })}
            />
            <Row
                row-flex="true"
                style={{
                    height: 'calc(100% - 66px)',
                    padding: 40,
                    overflowY: 'scroll',
                }}
            >
                <Col
                    span={24}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        padding: 20,
                    }}
                >
                    {petslist &&
                        petslist.pets.result.map((pet: any) => (
                            <Card
                                key={pet.name}
                                title={pet.name}
                                style={{
                                    minWidth: 200,
                                    width: 300,
                                    margin: 20,
                                }}
                            >
                                <p>
                                    <b>Specie:</b> {pet.specie.name}
                                </p>
                                <p>
                                    <b>Breed:</b> {pet.breed_primary.name}
                                </p>
                                <p>
                                    <b>Age:</b> {pet.age_key}
                                </p>
                                <p>
                                    <b>Sex:</b> {pet.sex_key}
                                </p>
                                <p>
                                    <b>Size:</b> {pet.size_key}
                                </p>
                            </Card>
                        ))}
                </Col>
            </Row>
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
                        total={petslist.pets.pages * 10}
                        current={state.page}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </Layout>
    );
};

export default Main;
