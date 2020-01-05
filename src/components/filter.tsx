/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Row, Col, Button } from 'antd';

interface IFilters {
    getSize?: any;
    getSex?: any;
    getAge?: any;
    size?: string;
    age?: string;
    sex?: string;
    reset?: any;
}

const Filter: React.FC<IFilters> = ({
    size,
    getSex,
    getSize,
    getAge,
    reset,
}) => {
    console.log(size);

    return (
        <Row>
            <Col
                span={24}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    paddingLeft: 20,
                    paddingRight: 20,
                }}
            >
                <div key="20">
                    <span key="0">Sex:</span>
                    <Button
                        onClick={() => getSex('MALE')}
                        style={{ margin: 8 }}
                        key="1"
                    >
                        MALE
                    </Button>
                    <Button
                        onClick={() => getSex('FEMALE')}
                        style={{ margin: 8 }}
                        key="2"
                    >
                        FEMALE
                    </Button>
                </div>
                <div key="30">
                    <span key="0">Size:</span>
                    <Button
                        onClick={() => getSize('S')}
                        style={{ margin: 8 }}
                        key="1"
                    >
                        S
                    </Button>
                    <Button
                        onClick={() => getSize('M')}
                        style={{ margin: 8 }}
                        key="2"
                    >
                        M
                    </Button>
                    <Button
                        onClick={() => getSize('L')}
                        style={{ margin: 8 }}
                        key="3"
                    >
                        L
                    </Button>
                    <Button
                        onClick={() => getSize('XL')}
                        style={{ margin: 8 }}
                        key="4"
                    >
                        XL
                    </Button>
                </div>
                <div key="40">
                    <span key="0">Age:</span>
                    <Button
                        onClick={() => getAge('BABY')}
                        style={{ margin: 8 }}
                        key="1"
                    >
                        BABY
                    </Button>
                    <Button
                        onClick={() => getAge('YOUNG')}
                        style={{ margin: 8 }}
                        key="2"
                    >
                        YOUNG
                    </Button>
                    <Button
                        onClick={() => getAge('ADULT')}
                        style={{ margin: 8 }}
                        key="3"
                    >
                        ADULT
                    </Button>
                    <Button
                        onClick={() => getAge('SENIOR')}
                        style={{ margin: 8 }}
                        key="4"
                    >
                        SENIOR
                    </Button>
                </div>
                <div key="50">
                    <Button
                        type="link"
                        onClick={() => reset()}
                        style={{
                            margin: 8,
                        }}
                        key="4"
                    >
                        Clear Filter
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default Filter;
