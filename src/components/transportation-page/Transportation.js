import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TransParamount from './TransParamount';
import TransDetails from './TransDetails';

class Transportation extends Component {
    componentDidMount() {
        document.title = "BTA | Transportation";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="body-universal">
                <Header />
                <main id="main-universal">
                    <section id="section-transportation">
                        <TransParamount />

                        {/* <TransDetails /> */}
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Transportation;
