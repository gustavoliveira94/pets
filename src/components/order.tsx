/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Row, Col, Button } from 'antd';

interface IFilters {
    setName?: any;
}

const Order: React.FC<IFilters> = ({ setName }) => {
    return (
        <Row>
            <Col
                span={24}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    paddingLeft: 20,
                    paddingRight: 20,
                }}
            >
                <h3>Order:</h3>
                <div key="20">
                    <span key="0">Asc:</span>
                    <Button
                        onClick={() => setName('name')}
                        style={{ margin: 8 }}
                        key="1"
                    >
                        Name
                    </Button>
                    <span key="0">Desc:</span>
                    <Button
                        onClick={() => setName('-name')}
                        style={{ margin: 8 }}
                        key="4"
                    >
                        Name
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default Order;
