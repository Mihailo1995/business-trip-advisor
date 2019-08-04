import React, { Component } from 'react';

class AccommDetails extends Component {
    render() {
        return (
            <div id="details-accomm-div">
                <button id="btn-close-details">&#10006;</button>
                <div className="div-img-data">
                    <div>
                        <img src={require("../../resources/images/hotel.jpg")} className="img-hotel-details" alt="Hotel image" />
                    </div>
                    <div className="div-accomm-data">
                        <h3 className="h3-accomm-name">Hotel Capri</h3>
                        <div className="div-type-stars" title="Category">
                            <i className="fas fa-hotel"></i>
                            <span className="span-type">Hotel</span>
                            <span className="span-stars">&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div className="div-address" title="Address">
                            <i className="fas fa-map-marked-alt"></i>
                            <span className="span-address">Calle 21, La Habana, Cuba</span>
                        </div>
                        <div className="div-email" title="Email">
                            <i className="fas fa-envelope"></i>
                            <span className="span-email">capri.hotel@gmail.com</span>
                        </div>
                        <div className="div-phone" title="Phone">
                            <i className="fas fa-phone-square"></i>
                            <span className="span-phone">+53 7 8397200</span>
                        </div>
                    </div>
                </div>

                <p className="p-accomm-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem neque numquam nisi
                    aliquam maxime praesentium molestiae. Quae soluta eum hic delectus iure tempore quam corrupti
                    reprehenderit unde magnam. Commodi excepturi maiores, quibusdam voluptas ipsum earum repellat quas,
                    ex labore reiciendis perferendis quae itaque blanditiis. Quia commodi non saepe ratione! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo similique quisquam, incidunt aliquid impedit
                    voluptatem! Quod, magnam? A sunt vel et ipsa ducimus quis quos, nisi quod! Minima a sed itaque
                    voluptates voluptate voluptatem neque quisquam, quibusdam veniam! Consequatur nihil voluptates quasi
                    officiis at quibusdam pariatur deleniti obcaecati dolorem officia, ducimus iusto totam sequi,
                    consequuntur tenetur voluptate rem corporis eius vero accusamus necessitatibus distinctio odio?
                    Cumque cupiditate temporibus eius qui, molestias tempora quidem magni culpa et vitae adipisci hic
                    quos, animi mollitia eos, sapiente nam eligendi voluptatibus vero impedit dolorem assumenda optio.
                    Eligendi soluta cumque fugiat voluptates similique non accusantium.
                </p>

                <div className="div-feedbacks">
                    <div className="feedbacks-accomm-div">
                        <div className="div-feedbacks-l-o-first">
                            <div className="div-feedbacks-data">
                                <h2 className="h2-feedbacks-text">Feedbacks</h2>
                                <h3 className="h3-feedbacks-number" title="Number of feedbacks">(3)</h3>
                                <h3 className="h3-average-rating" title="Average rating">&#9733;&#9733;&#9733;&#9734;&#9734;</h3>
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
                                <p className="p-feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima praesentium amet sint ad modi pariatur in porro reiciendis totam, earum commodi cumque corporis libero assumenda numquam vitae rem provident.</p>
                            </div>

                            <div className="div-feedback">
                                <div>
                                    <h3 className="h3-user">Elliot Fu</h3>
                                    <span className="span-feedback-date">Yesterday at 12:30</span>
                                    <button className="btn-delete-universal" title="Delete feedback">&#10006;</button>
                                </div>
                                <p className="p-feedback">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum vero provident dignissimos exercitationem. Sed eum quisquam laborum repudiandae commodi eos praesentium tempora atque! Distinctio, earum aut! Libero quae itaque accusantium totam maxime! Omnis unde sapiente porro voluptatem debitis repudiandae.</p>
                            </div>

                            <div className="div-feedback">
                                <div>
                                    <h3 className="h3-user">Joe Henderson</h3>
                                    <span className="span-feedback-date">5 days ago</span>
                                    <button className="btn-delete-universal" title="Delete feedback">&#10006;</button>
                                </div>
                                <p className="p-feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a nulla laborum similique, autem tempora asperiores temporibus voluptatum, dolorem dolores sit at? Unde, cumque consequatur. Consectetur ipsam tenetur necessitatibus fugiat similique nostrum dolor inventore? Voluptatem.</p>
                            </div>
                        </div>

                        <form className="form-feedback">
                            <textarea className="textarea-feedback" placeholder="Write a feedback..."></textarea>
                            <div>
                                <button className="btn-add-universal admin" id="btn-add-feedback">Add feedback</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccommDetails;
