
import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import we from './Images/we.jpg';

class AboutUs extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        // Initialize ScrollReveal
        const sr = ScrollReveal();

        // Define the configuration for the reveal animation
        const revealConfig = {
            distance: '420px',  // Distance to reveal element
            duration:2000,    // Duration of animation in milliseconds
            delay: 200,        // Delay before animation starts
            origin: 'left',  // Origin of animation
            easing: 'ease-out', // Easing function
            reset: true,       // Reset on container scroll
        };

        // Use ScrollReveal on h1, p, and h2 elements
        sr.reveal(this.headingRef, revealConfig);
        sr.reveal(this.paragraphRef, revealConfig);
        sr.reveal(this.subHeadingRef, revealConfig);
        sr.reveal(".column h2,p", revealConfig);
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${we})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <h1 class="text-black" ref={ref => (this.headingRef = ref)}>About Us</h1>
                <br />
                <p class="text-red" ref={ref => (this.paragraphRef = ref)}>We are giving a platform for maids and users</p>

                <h2 ref={ref => (this.subHeadingRef = ref)}>Our Team</h2>
                <hr />
                <div class="row">
                    <div class="column">
                        <div>
                            <div>
                                <h2>Rajshri Jaiswal</h2>
                                <p class="title">CDAC MET-IIT NASIK</p>
                            </div>
                        </div>

                        <div class="column">
                            <div >
                                <div>
                                    <h2>--------------------------------------------</h2>
                                </div>
                            </div>
                        </div>


                        <div class="column">
                            <div >
                                <div >
                                    <h2>Prajwal Shirsat</h2>
                                    <p class="title">CDAC MET-IIT NASIK</p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >
                                <div>
                                    <h2>--------------------------------------------</h2>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >

                                <div >
                                    <h2>Pratik Ohol</h2>
                                    <p class="title"> CDAC  MET-IIT NASIK</p>

                                </div>
                            </div>
                        </div>
                        
                        <div class="column">
                            <div >
                                <div>
                                    <h2>--------------------------------------------</h2>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >

                                <div>
                                    <h2>Dhiraj Brahmankar</h2>
                                    <p class="title">CDAC MET-IIT NASIK</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;



/*
------------------------------------------------------------------

import React, { Component } from 'react';
import we from './Images/we.jpg';


class AboutUs extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${we})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <h1 class="text-black"  >About Us </h1>
                <br />
                <p class=" text-red">We are giving platform for maids and users </p>
                
                <h2 >Our Team</h2>
                <hr />
                <div class="row">
                    <div class="column" >
                        <div >
                            <div >
                                <h2>Rajshri Jaiswal</h2>
                                <p class="title">CDAC MET-IIT NASIK</p>

                            </div>
                        </div>

                        <div class="column">
                            <div >
                                <div>
                                    <h2>--------------------------------------------</h2>
                                </div>
                            </div>
                        </div>


                        <div class="column">
                            <div >
                                <div >
                                    <h2>Prajwal Shirsat</h2>
                                    <p class="title">CDAC MET-IIT NASIK</p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >
                                <div>
                                    <h2>--------------------------------------------</h2>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >

                                <div >
                                    <h2>Pratik Ohol</h2>
                                    <p class="title"> CDAC  MET-IIT NASIK</p>

                                </div>
                            </div>
                        </div>
                        
                        <div class="column">
                            <div >
                                <div>
                                    <h2>--------------------------------------------</h2>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >

                                <div>
                                    <h2>Dhiraj Brahmankar</h2>
                                    <p class="title">CDAC MET-IIT NASIK</p>

                                </div>
                            </div>
                        </div>


                       

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs; 


*/