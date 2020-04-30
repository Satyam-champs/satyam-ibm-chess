import React from 'react';
import Photo from '../Photo.jpg'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
const Contact = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-8">

                    <div class="card hovercard">
                        <div class="cardheader" className="App3" >
                            <p>
                            <h1>Satyam</h1>
                            <br/>
                            <h6>****      Slack Me or Mail Me for any clarifications.</h6>
                            </p>
                            {/* <div class="avatar">
                                <img alt="" src={Photo} />
                            </div>
                            <div class="info">
                                <div class="title">
                                    <a target="_blank" href="https://scripteden.com/">Satyam</a>
                                </div>
                                <div class="desc">Passionate designer</div>
                                <div class="desc">Curious developer</div>
                                <div class="desc">Tech geek</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Contact;