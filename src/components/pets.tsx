/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'antd';

interface IRootState {
    pets?: any;
}

const Pets: React.FC = () => {
    const petlist = (pets: IRootState) => pets.pets;
    const petslist = useSelector(petlist);

    return (
        <Row
            row-flex="true"
            style={{
                height: 'calc(100% - 66px)',
                padding: 40,
                overflowY: 'scroll',
            }}
        >
            <Col span={24}>
                <ul
                    data-testid="pets"
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        padding: 20,
                    }}
                >
                    {petslist &&
                        petslist.pets.result &&
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
                </ul>
            </Col>
        </Row>
    );
};

export default Pets;
