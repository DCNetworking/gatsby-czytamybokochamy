import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../style/home.module.scss';

const Home = () => {
    return (
        <Layout>
            <section className={styles.home}>
                <h1 className={styles.header}>Hello</h1>
            </section>
        </Layout>
    );
}

export default Home;
