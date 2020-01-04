/* eslint-disable import/no-unresolved */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, PageHeader, Layout } from 'antd';
import 'antd/dist/antd.css';

interface IRootState {
    user?: any;
}

const Main: React.FC<IRootState> = () => {
    const auth = (user: IRootState) => user.user;
    const authenticated = useSelector(auth);

    if (!authenticated.user.authenticate) {
        return <Redirect to="/login" />;
    }

    return (
        <Layout style={{ height: '100%' }}>
            <Row>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    backIcon={false}
                    title="Main"
                />
            </Row>
        </Layout>
    );
};

export default Main;
