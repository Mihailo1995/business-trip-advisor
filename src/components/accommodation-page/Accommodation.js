import React, { Component } from 'react';
import AccommParamount from './AccommParamount';
import AccommDetails from './AccommDetails';
import Header from '../Header';
import Footer from '../Footer';


class Accommodation extends Component {
    state = {
        accommDetailsShown: false
    }

    componentDidMount() {
        document.title = "BTA | Accommodation";
        window.scrollTo(0, 0);
    }

    onDetailsBtnClick = () => {
        this.setState({
            accommDetailsShown: true
        });
    }

    render() {
        return (
            <div id="body-universal">
                <Header />
                <main id="main-universal">
                    <section id="section-accommodation">
                        <AccommParamount onDetailsBtnClick={this.onDetailsBtnClick} />

                        {/* {<AccommDetails />} */}
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Accommodation;
