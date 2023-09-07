import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import qw from './Images/qw.jpg';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        // Initialize ScrollReveal
        const sr = ScrollReveal();

        // Define the configuration for the reveal animation
        const revealConfig = {
            distance: '500px',  // Distance to reveal element
            duration: 2000,    // Duration of animation in milliseconds
            delay: 200,        // Delay before animation starts
            origin: 'right',  // Origin of animation
            easing: 'ease-out', // Easing function
            reset: true,       // Reset on container scroll
        };

        // Use ScrollReveal on table, tr, th, and td elements
        sr.reveal(this.tableRef, revealConfig);
        sr.reveal(this.tableRef, revealConfig);
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${qw})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div ref={ref => (this.tableRef = ref)}>
                    <h1 style={{ color: "black" }}>CONTACT</h1><br /><br />
                    <b>
                        <center>
                            <table border=' solid 40' className="table table-bordered table-solid">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Contact Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Rajshri Jaiswal</td>
                                        <td>rajshrijaiswal717@gmail.com</td>
                                        <td>7770066701</td>
                                    </tr>
                                    <tr>
                                        <td>Prajwal Shirsat</td>
                                        <td>prajwalshirsat2105@gmail.com</td>
                                        <td>8888241766</td>
                                    </tr>
                                    <tr>
                                        <td>Pratik Ohol</td>
                                        <td>pratikohol21@gmail.com</td>
                                        <td>9763837089</td>
                                    </tr>
                                    <tr>
                                        <td>Dhiraj Brahmankar</td>
                                        <td>dhirajsb1995@gmail.com</td>
                                        <td>9604409397</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </center>
                    </b>
                </div>
            </div>
        );
    }
}

export default Contact;
 
 /*


                 modification for scrollreveal event 
                 
 import React, { Component } from 'react';
import qw from './Images/qw.jpg';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${qw})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div >
                    
                    <h1 style={{ text: "white" }}>CONTACT </h1><br />
                    <br />
                    <b>
                    <center>
                        <table border='4' className="table table-bordered table-solid" >

                            <tr >
                                &nbsp;<th>Name </th>  &nbsp;
                                <th>Email ID</th>&nbsp;
                                <th>Contact Number</th>&nbsp;&nbsp;


                            </tr>
                            <tr>
                                &nbsp; <td>Rajshri Jaiswal</td>&nbsp;
                                <td>rajshrijaiswal717@gmail.com.com</td>&nbsp;
                                <td>7770066701</td>&nbsp;&nbsp;
                            </tr>



                            <tr>
                                &nbsp; <td>Prajwal Shirsat</td>&nbsp;
                                <td>prajwalshirsat2105@gmail.com</td>&nbsp;
                                <td>8888241766</td>&nbsp;&nbsp;
                            </tr>


                            <tr>
                                &nbsp; <td>Pratik Ohol</td>&nbsp;
                                <td>pratikohol21@gmail.com</td>&nbsp;
                                <td>9763837089</td>&nbsp;&nbsp;
                            </tr>


                            <tr>
                                &nbsp; <td>Dhiraj Brahmankar</td>&nbsp;
                                <td>dhirajsb1995@gmail.com</td>&nbsp;
                                <td>9604409397</td>&nbsp;&nbsp;
                            </tr>
                            <tr>
                                &nbsp; <td></td>&nbsp;
                                <td></td>&nbsp;
                                <td></td>&nbsp;&nbsp;
                            </tr>
                            
                     </table>
                    </center>

                    </b>
                </div>
            </div>


        )
    }
}

export default Contact;


*/