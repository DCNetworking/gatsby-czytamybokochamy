import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../style/home.module.scss';

const Home = () => {
    return (
        <Layout>
            <section className={styles.home}>
                <img className={styles.image} src='/test_picture.jpg' alt='main_menu_picture' />
            </section>
        </Layout>
    );
}

export default Home;
