import React, { Component } from 'react';
import SelectField from '../form-elements/SelectField';
import Checkbox from '../form-elements/Checkbox';
import Header from '../Header';
import Footer from '../Footer';

const countries = ["Serbia", "USA", "France", "Belgium", "Spain", "China"];
const states = ["Alabama", "Arizona", "Ohio", "California", "Iowa", "Florida"];
const cities = ["Beograd", "Novi Sad", "Niš", "London", "Berlin", "Rome"];

class Life extends Component {
    state = {
        country: "",
        state: "",
        city: "",
        isLocalTransport: false,
        isFoodAndEntertainment: false,
        isSafety: false,
        isLocalCulture: false,
        isAirport: false
    }

    componentDidMount() {
        document.title = "BTA | Life in different countries";
        window.scrollTo(0, 0);
    }

    onChangeHandler = (e) => {
        const { type, name, value, checked } = e.target;
        if (type === "checkbox") {
            this.setState({
                [name]: checked
            });
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    render() {
        return (
            <div id="body-universal">
                <Header />
                <main id="main-universal">
                    <section id="section-life">
                        <h1 className="h1-universal-text">Life in different countries</h1>
                        <form className="form-search">
                            <div className="selects-c-boxes-div">
                                <div className="selects-div">
                                    <div className="div-select">
                                        <SelectField
                                            name="country"
                                            value={this.state.country}
                                            defaultValue="Country..."
                                            title="Select country"
                                            required={true}
                                            onChangeHandler={this.onChangeHandler}
                                            options={countries}
                                        />
                                    </div>
                                    <div className="div-select">
                                        <SelectField
                                            name="state"
                                            value={this.state.state}
                                            defaultValue="State..."
                                            title="Select state"
                                            required={false}
                                            onChangeHandler={this.onChangeHandler}
                                            options={states}
                                        />
                                    </div>
                                    <div className="div-select">
                                        <SelectField
                                            name="city"
                                            value={this.state.city}
                                            defaultValue="City..."
                                            title="Select city"
                                            required={true}
                                            onChangeHandler={this.onChangeHandler}
                                            options={cities}
                                        />
                                    </div>
                                </div>

                                <div className="c-boxes-div">
                                    <ul className="ul-c-boxes">
                                        <li>
                                            <Checkbox
                                                label="Local transport"
                                                name="localTransport"
                                                value={this.state.isLocalTransport}
                                                onChangeHandler={this.onChangeHandler}
                                            />
                                        </li>
                                        <li>
                                            <Checkbox
                                                label="Food & entertainment"
                                                name="foodAndEntertainment"
                                                value={this.state.isFoodAndEntertainment}
                                                onChangeHandler={this.onChangeHandler}
                                            />
                                        </li>
                                        <li>
                                            <Checkbox
                                                label="Safety"
                                                name="safety"
                                                value={this.state.isSafety}
                                                onChangeHandler={this.onChangeHandler}
                                            />
                                        </li>
                                        <li>
                                            <Checkbox
                                                label="Local culture"
                                                name="localCulture"
                                                value={this.state.isLocalCulture}
                                                onChangeHandler={this.onChangeHandler}
                                            />
                                        </li>
                                        <li>
                                            <Checkbox
                                                label="Airport"
                                                name="airport"
                                                value={this.state.isAirport}
                                                onChangeHandler={this.onChangeHandler}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>

                        <div className="output-life-div">
                            <div className="general-info-div">
                                <div id="shown-div" className="admin">
                                    <h2 className="h2-general-info">Life in the city</h2>
                                    <div className="categories-div">
                                        <div className="div-category">
                                            <h3 className="h3-category">Local transport</h3>
                                            <p className="p-category">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, autem.
                                                Molestiae vel necessitatibus tempora ipsa iste! Animi expedita ullam optio fugit
                                                minus neque, quaerat saepe quis voluptatum. Quo, fugiat autem.
                                        </p>
                                            <div className="div-date-author">
                                                <span className="span-info-date">15.4.2019. 12:30</span>
                                                <span className="span-author-name">John Wick</span>
                                            </div>
                                        </div>
                                        <div className="div-category">
                                            <h3 className="h3-category">Food & entertainment</h3>
                                            <p className="p-category">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis, totam
                                                repudiandae perferendis necessitatibus reprehenderit nobis nulla cupiditate,
                                                expedita fuga adipisci est eaque praesentium. Aut, earum! Culpa, non. Natus,
                                                fuga.
                                        </p>
                                            <div className="div-date-author">
                                                <span className="span-info-date">15.4.2019. 12:30</span>
                                                <span className="span-author-name">John Wick</span>
                                            </div>
                                        </div>
                                        <div className="div-category">
                                            <h3 className="h3-category">Safety</h3>
                                            <p className="p-category">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eum expedita
                                                unde ab exercitationem nesciunt laborum at tempora perspiciatis. Quod inventore
                                                fugiat aliquid aspernatur tempora.
                                        </p>
                                            <div className="div-date-author">
                                                <span className="span-info-date">15.4.2019. 12:30</span>
                                                <span className="span-author-name">John Wick</span>
                                            </div>
                                        </div>
                                        <div className="div-category">
                                            <h3 className="h3-category">Local culture</h3>
                                            <p className="p-category">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur
                                                non ea nulla beatae at minima ipsam itaque molestiae. Voluptates, molestiae
                                                dolorum.
                                        </p>
                                            <div className="div-date-author">
                                                <span className="span-info-date">15.4.2019. 12:30</span>
                                                <span className="span-author-name">John Wick</span>
                                            </div>
                                        </div>
                                        <div className="div-category">
                                            <h3 className="h3-category">Airport</h3>
                                            <p className="p-category">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate
                                                porro, reiciendis, illo accusantium eius quaerat fugit dolores repellendus iste
                                                maiores rerum aspernatur? Repellat recusandae perferendis tenetur impedit.
                                        </p>
                                            <div className="div-date-author">
                                                <span className="span-info-date">15.4.2019. 12:30</span>
                                                <span className="span-author-name">John Wick</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn-add-universal admin" id="btn-add-info">Add info</button>
                                </div>

                                <div id="hidden-div" className="admin" style={{ display: "none" }}>
                                    <form className="form-add-info">

                                    </form>
                                </div>
                            </div>

                            <div className="comments-life-div">
                                <div className="div-comments-l-o-first">
                                    <h2 className="h2-comments-text">Comments</h2>
                                    <div className="div-l-o-first">
                                        <span className="span-l-o-first">Latest first</span>
                                        <span className="span-l-o-first">Oldest first</span>
                                    </div>
                                </div>

                                <div className="comments-div">
                                    <div className="div-comment">
                                        <div>
                                            <h3 className="h3-user">Matt Damon</h3>
                                            <span className="span-comment-date">Today at 5:42</span>
                                            <button className="btn-delete-universal" id="btn-delete-comment"
                                                title="Delete comment">&#10006;</button>
                                        </div>
                                        <p className="p-comment">How artistic!</p>
                                    </div>

                                    <div className="div-comment">
                                        <div>
                                            <h3 className="h3-user">Elliot Fu</h3>
                                            <span className="span-comment-date">Yesterday at 12:30</span>
                                            <button className="btn-delete-universal" title="Delete comment">&#10006;</button>
                                        </div>
                                        <p className="p-comment">This has been very useful for my research. Thanks as well!</p>
                                    </div>

                                    <div className="div-comment">
                                        <div>
                                            <h3 className="h3-user">Joe Henderson</h3>
                                            <span className="span-comment-date">5 days ago</span>
                                            <button className="btn-delete-universal" title="Delete comment">&#10006;</button>
                                        </div>
                                        <p className="p-comment">Dude, this is awesome. Thanks so much</p>
                                    </div>
                                </div>

                                <form className="form-comment">
                                    <textarea className="textarea-comment" placeholder="Write a comment..."></textarea>
                                    <div>
                                        <button className="btn-add-universal admin" id="btn-add-comment">Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>

                </main>
                <Footer />
            </div>
        );
    }
}

export default Life;
