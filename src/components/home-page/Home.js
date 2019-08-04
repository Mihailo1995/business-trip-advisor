import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

class Home extends Component {
    componentDidMount() {
        document.title = "BTA | Home";
    }

    render() {
        return (
            <div id="body-universal">
                <Header />
                <main id="main-universal">
                    <section id="section-home-1">
                        <div className="div-welcome">
                            <h1 className="h1-welcome-user">Welcome</h1>
                            <h3 className="h3-find-out">Find out the best trip offers all around the world</h3>
                            <a href="#section-home-2">
                                <button className="btn-explore">Explore</button>
                            </a>
                        </div>
                    </section>
                    <section id="section-home-2">
                        <p className="p-purpose">Business Trip Advisor is application that gives users information about lifestyle,
                            cultures, accommodation and transport all around the world. Feel free to join and give us your
                impression about your business trip!</p>

                        <div className="features-div">
                            <div className="feature-box">
                                <Link to="/life">
                                    <i className="fas fa-globe-europe"></i>
                                </Link>
                                <h3 className="h3-feature">Life in different countreis</h3>
                                <p className="p-feature">Bussines travel can be hugely rewarding - you get to discover new cultures,
                                    meet new people, enjoy new experiences, improve your communication skills, finding the new
                                    destination etc. We're here to help you to find out the best destinations that suits your needs
                        and interests.</p>
                            </div>

                            <div className="feature-box">
                                <Link to="/accommodation">
                                    <i className="fas fa-hotel"></i>
                                </Link>
                                <h3 className="h3-feature">Choose the best accommodation</h3>
                                <p className="p-feature">We connect business travelers with the big selection of incredible places to
                                    stay, including everything from apartments, vacation homes, luxury resorts etc. Finding a
                                    suitable accommodation is a crucial part of your trip, and it can have an enormous impact on
                        your spending if not chosen correctly.</p>
                            </div>

                            <div className="feature-box">
                                <Link to="/transportation">
                                    <i className="fas fa-plane"></i>
                                </Link>
                                <h3 className="h3-feature">Enjoy your travel</h3>
                                <p className="p-feature">We have the infrastucture, people and systems to fulfill local, regional and
                                    global travel programmes seamlessly. From full service and low-cost carriers, hotels, domestic
                                    and international rail providers, ground transportation, passports & visas. Enjoy the
                        comfortable travel, have a perfect safe journey.</p>
                            </div>
                        </div>
                    </section>

                </main>
                <Footer />
            </div>
        );
    }
}

export default Home;
