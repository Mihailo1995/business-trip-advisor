import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Feedbacks extends Component {
    componentDidMount() {
        document.title = "BTA | Feedbacks";
    }

    render() {
        return (
            <div id="body-universal">
                <Header />
                <main id="main-universal">
                    <section id="section-feedbacks">
                        <div className="output-feedbacks-div">
                            <div className="div-feedbacks">
                                <div className="feedbacks-accomm-div">
                                    <div className="div-feedbacks-l-o-first">
                                        <div className="div-feedbacks-data">
                                            <h2 className="h2-feedbacks-text">Feedbacks</h2>
                                        </div>
                                        <div className="div-l-o-first__feedback">
                                            <span className="span-l-o-first">Latest first</span>
                                            <span className="span-l-o-first">Oldest first</span>
                                        </div>
                                    </div>

                                    <div className="feedbacks-div">
                                        <div className="div-feedback">
                                            <div>
                                                <h3 className="h3-user">Matt Damon</h3>
                                                <span className="span-feedback-date">Today at 5:42</span>
                                                <button className="btn-delete-universal" id="btn-delete-feedback"
                                                    title="Delete comment">&#10006;</button>
                                            </div>
                                            <p className="p-feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Repellendus minima praesentium amet sint ad modi pariatur in porro
                                                reiciendis totam, earum commodi cumque corporis libero assumenda numquam
                                    vitae rem provident.</p>
                                        </div>

                                        <div className="div-feedback">
                                            <div>
                                                <h3 className="h3-user">Elliot Fu</h3>
                                                <span className="span-feedback-date">Yesterday at 12:30</span>
                                                <button className="btn-delete-universal" title="Delete feedback">&#10006;</button>
                                            </div>
                                            <p className="p-feedback">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Ducimus harum vero provident dignissimos exercitationem. Sed eum quisquam
                                                laborum repudiandae commodi eos praesentium tempora atque! Distinctio, earum
                                                aut! Libero quae itaque accusantium totam maxime! Omnis unde sapiente porro
                                    voluptatem debitis repudiandae.</p>
                                        </div>

                                        <div className="div-feedback">
                                            <div>
                                                <h3 className="h3-user">Joe Henderson</h3>
                                                <span className="span-feedback-date">5 days ago</span>
                                                <button className="btn-delete-universal" title="Delete feedback">&#10006;</button>
                                            </div>
                                            <p className="p-feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Quo a nulla laborum similique, autem tempora asperiores temporibus
                                                voluptatum, dolorem dolores sit at? Unde, cumque consequatur. Consectetur
                                                ipsam tenetur necessitatibus fugiat similique nostrum dolor inventore?
                                    Voluptatem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Feedbacks;
