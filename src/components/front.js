import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import "animate.css"; // Import any CSS animations you want to use

// Rest of your code...


class Front extends Component {
    componentDidMount() {
      ScrollReveal({
        reset: true,
        distance: "110px",
        duration: 2000,
        delay: 200,
      });

  
     
      ScrollReveal().reveal(".header-nav h1", { origin: "top" });
      ScrollReveal().reveal(".col-md-6 slidgb  h1 ,p,li", { origin: "left" });
      ScrollReveal().reveal(".header-nav h1", { origin: "top" });
      ScrollReveal().reveal(".md-margin-bottom-40 a", { origin: "top" });
    
    
      // Add more reveal calls for other elements here...
    }
  
    // Rest of your component code...
  
  

      //class Front extends React.Component {
  render() {
    return (
      <>

      
      <header>
         
         <div id="nav-head" class="header-nav"> 
             <div class="container">
                 <div class="row">
                     <div class="col-md-2 col-sm-10 nav-img">
                         <img src="logo2.png" alt=""/> 
                     </div>
                     <div class="col-md-6 col-sm-10 nav" >
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <h1 style={{color:"yellow"}}>MaidOnCall: A Web-Based Platform for Effortless Maid Booking</h1> 
                     </div>
                 </div>
             </div>
         </div>
     </header>
     <br/>
 
 
     
      <div id="home" class="slider" > 
        <div class="container"> 
            <div class="slider-titl row">
                <div class="col-md-6 slidgb">

                  <h1>We Promise to keep you stressfree regarding household chores</h1>
                    <p>Worried about the messy house and kitchen works?? Dont be stressed!!! we are here to help you out!! Just book a maid and get a neat and clean house with delicious food in kitchen within no time!!</p>
                    <div class="bnkji">
                        
                    </div>
                </div>
                <div class="col-md-6 slid-img">
                    <img src="assets/images/cleaning.png" alt=""/>
                </div>
            </div>
        </div>
    </div>

    <section id="aboutus" class="with-medical">
        <div class="container">
           <div class="inner-title">
           <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

                <h2 >About Us</h2>
                <p>Take a look at some of our key features</p>
            </div>
            <div class="row">
               
                <div class="col-lg-6 col-md-12 txtr">
                    <h4>Why choose services with <br/>
                     <span>  "MaidOnCall" </span>   
                    </h4>
                    <p><b>"MaidOnCall: A Web-Based Platform for Effortless Maid Booking" is a modern and innovative solution designed to simplify the process of 
                        hiring domestic help. This platform serves as an online marketplace that
                         connects households seeking cleaning and housekeeping services with experienced and trustworthy maids. </b></p>
                   <ul> <b>
                       <li><i class="fa fa-check"></i>User-Friendly Interface   :  </li>
                       <li><i class="fa fa-check"></i> Diverse Maid Profiles    :  </li>
                       <li><i class="fa fa-check"></i>Flexible Options          :  </li>
                       <li><i class="fa fa-check"></i>Verified Maids            :  </li>
                       <li><i class="fa fa-check"></i>Real-time Updates         :  </li>
                       </b>
                   </ul>
                </div>
                
                <div class="col-lg-6 col-md-12">
                       <div class="row">
                           <div class="col-md-6">
                               <div class="count-bx">
                                   <h4>22K</h4>
                                   <p>Services Done</p>
                               </div>
                           </div>
                           <div class="col-md-6">
                               <div class="count-bx">
                                   <h4>11K</h4>
                                   <p>Total Clients</p>
                               </div>
                           </div>
                           <div class="col-md-6">
                               <div class="count-bx">
                                   <h4>465</h4>
                                   <p>Projects Done</p>
                               </div>
                           </div>
                           <div class="col-md-6">
                               <div class="count-bx">
                                   <h4>14Y</h4>
                                   <p>Experiance</p>
                               </div>
                           </div>
                       </div>
                </div>
                
            </div>
        </div>
    </section>

    <section id="serv" class="latest-features">
        <div class="container">
            <div class="inner-title">
            <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

                <h2 > Latest Features & Services</h2>
                <p>Take a look at some of latest features and services provided by our team</p>
            </div>

            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="single-feature">
                       <img src="assets/images/services/clean1.jpg" alt=""/>
                       <div class="bn-dgt">
                         
                        <h5><b>Home Cleaning</b></h5>
                        <p>Rediscover the joy of coming home to a pristine sanctuary with our meticulous home cleaning services. Let our expert team transform your living space into an oasis of freshness and order, allowing you to focus on the things that truly matter while enjoying a spotless and inviting atmosphere.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="single-feature">
                       <img src="assets/images/services/clean2.jpg" alt=""/>
                       <div class="bn-dgt">
                        
                        <h5><b>Washing</b> </h5>
                        <p>Experience the luxury of perfectly laundered clothes without the hassle. Our washing services combine top-notch technology with care, ensuring your garments receive the gentle treatment they deserve, leaving you with impeccably clean and freshly scented clothing every time..</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="single-feature">
                       <img src="assets/images/services/clean3.jpg" alt=""/>
                       <div class="bn-dgt">
                        
                        <h5><b>Cooking</b></h5>
                        <p>Indulge in the pleasures of fine dining without leaving the comfort of your home. Our skilled chefs are ready to create culinary masterpieces tailored to your tastes, bringing gourmet experiences to your table and saving you time while savoring exceptional flavors..</p>
                        </div>
                    </div>
                </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="single-feature">
                       <img src="assets/images/services/clean4.jpg" alt=""/>
                       <div class="bn-dgt">
                             
                            <h5> <b>Utensils</b></h5>
                            <p>Elevate your cooking endeavors with our premium utensils that blend functionality with style. From precision-engineered knives to elegantly designed cookware, our collection enhances your culinary journey, making every meal preparation a delightful experience..</p>
                         </div>
                    </div>
                </div>

                

            </div>
                
        </div>

    </section>
     

      <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <h2>About Us</h2>
                    <p>
                    "MaidOnCall: A Web-Based Platform for Effortless Maid Booking"
                        is made to make your maid hiring experience 
                        much better and safer.
                    </p>
                    <p>We focus on technologies that promise to reduce costs, streamline processes and speed time-to-market, Backed by our strong quality processes and rich experience managing global... </p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h2>Useful Links</h2>
                    <ul class="list-unstyled link-list">
                        <li><a ui-sref="about" href="#about">About us</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="portfolio" href="#/portfolio">Services</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="products" href="#/products">Latest news</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="gallery" href="#/gallery">Features</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="contact" href="#/contact">Contact us</a><i class="fa fa-angle-right"></i></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 map-img">
                    <h2>Contact Us</h2>
                    <address class="md-margin-bottom-40">
                      MaidOnCall  <br/>
                       Shop No 3, <br/>
                        College Road, Nasik. <br/>
                        Phone: +91 8888241766 <br/>
                        Email: <a href="mailto:*********.com" class=""> MaidOnCall@gmail.com</a><br/>
                        Web: <a href="https:********.com/" class="">www.MaidOnCall.in</a>
                    </address>

                </div>
            </div>
        </div>
        

    </footer>




    </> 
    );
  }




     }
export default Front;




/* import React from "react";


 
import 'animate.css';


ScrollReveal({
    reset: true,
   distance: '110px',
   duration: 2000,
   delay: 200
   
   });



   ScrollReveal().reveal('.header-nav h1', { origin: 'top' });


   ScrollReveal().reveal('.header-nav, .heading', { origin: 'top' });

   ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });

   ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

   ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
   ScrollReveal().reveal('.footer-text, .footer-icontop', { origin: 'right' });



class Front extends React.Component {
  render() {
    return (
      <>

      
      <header>
         
         <div id="nav-head" class="header-nav"> 
             <div class="container">
                 <div class="row">
                     <div class="col-md-2 col-sm-10 nav-img">
                         <img src="logo2.png" alt=""/> 
                     </div>
                     <div class="col-md-6 col-sm-10 nav" >
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <h1 style={{color:"yellow"}}>MaidOnCall: A Web-Based Platform for Effortless Maid Booking</h1> 
                     </div>
                 </div>
             </div>
         </div>
     </header>
     <br/>
 
 
     
      <div id="home" class="slider" > 
        <div class="container"> 
            <div class="slider-titl row">
                <div class="col-md-6 slidgb">

                  <h1>We Promise to keep you stressfree regarding household chores</h1>
                    <p>Worried about the messy house and kitchen works?? Dont be stressed!!! we are here to help you out!! Just book a maid and get a neat and clean house with delicious food in kitchen within no time!!</p>
                    <div class="bnkji">
                        
                    </div>
                </div>
                <div class="col-md-6 slid-img">
                    <img src="assets/images/cleaning.png" alt=""/>
                </div>
            </div>
        </div>
    </div>

    <section id="aboutus" class="with-medical">
        <div class="container">
           <div class="inner-title">
           <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

                <h2 >About Us</h2>
                <p>Take a look at some of our key features</p>
            </div>
            <div class="row">
               
                <div class="col-lg-6 col-md-12 txtr">
                    <h4>Why choose services with <br/>
                     <span>  "MaidOnCall" </span>   
                    </h4>
                    <p><b>"MaidOnCall: A Web-Based Platform for Effortless Maid Booking" is a modern and innovative solution designed to simplify the process of 
                        hiring domestic help. This platform serves as an online marketplace that
                         connects households seeking cleaning and housekeeping services with experienced and trustworthy maids. </b></p>
                   <ul> <b>
                       <li><i class="fa fa-check"></i>User-Friendly Interface   :  </li>
                       <li><i class="fa fa-check"></i> Diverse Maid Profiles    :  </li>
                       <li><i class="fa fa-check"></i>Flexible Options          :  </li>
                       <li><i class="fa fa-check"></i>Verified Maids            :  </li>
                       <li><i class="fa fa-check"></i>Real-time Updates         :  </li>
                       </b>
                   </ul>
                </div>
                
                <div class="col-lg-6 col-md-12">
                       <div class="row">
                           <div class="col-md-6">
                               <div class="count-bx">
                                   <h4>22K</h4>
                                   <p>Services Done</p>
                               </div>
                           </div>
                           <div class="col-md-6">
                               <div class="count-bx">
                                   <h4>11K</h4>
                                   <p>Total Clients</p>
                               </div>
                           </div>
                           <div class="col-md-6">
                               <div class="count-bx">
                                   <h4>465</h4>
                                   <p>Projects Done</p>
                               </div>
                           </div>
                           <div class="col-md-6">
                               <div class="count-bx">
                                   <h4>14Y</h4>
                                   <p>Experiance</p>
                               </div>
                           </div>
                       </div>
                </div>
                
            </div>
        </div>
    </section>

    <section id="serv" class="latest-features">
        <div class="container">
            <div class="inner-title">
            <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

                <h2 > Latest Features & Services</h2>
                <p>Take a look at some of latest features and services provided by our team</p>
            </div>

            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="single-feature">
                       <img src="assets/images/services/clean1.jpg" alt=""/>
                       <div class="bn-dgt">
                         
                        <h5><b>Home Cleaning</b></h5>
                        <p>Rediscover the joy of coming home to a pristine sanctuary with our meticulous home cleaning services. Let our expert team transform your living space into an oasis of freshness and order, allowing you to focus on the things that truly matter while enjoying a spotless and inviting atmosphere.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="single-feature">
                       <img src="assets/images/services/clean2.jpg" alt=""/>
                       <div class="bn-dgt">
                        
                        <h5><b>Washing</b> </h5>
                        <p>Experience the luxury of perfectly laundered clothes without the hassle. Our washing services combine top-notch technology with care, ensuring your garments receive the gentle treatment they deserve, leaving you with impeccably clean and freshly scented clothing every time..</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="single-feature">
                       <img src="assets/images/services/clean3.jpg" alt=""/>
                       <div class="bn-dgt">
                        
                        <h5><b>Cooking</b></h5>
                        <p>Indulge in the pleasures of fine dining without leaving the comfort of your home. Our skilled chefs are ready to create culinary masterpieces tailored to your tastes, bringing gourmet experiences to your table and saving you time while savoring exceptional flavors..</p>
                        </div>
                    </div>
                </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="single-feature">
                       <img src="assets/images/services/clean4.jpg" alt=""/>
                       <div class="bn-dgt">
                             
                            <h5> <b>Utensils</b></h5>
                            <p>Elevate your cooking endeavors with our premium utensils that blend functionality with style. From precision-engineered knives to elegantly designed cookware, our collection enhances your culinary journey, making every meal preparation a delightful experience..</p>
                         </div>
                    </div>
                </div>

                

            </div>
                
        </div>

    </section>
     

      <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <h2>About Us</h2>
                    <p>
                    "MaidOnCall: A Web-Based Platform for Effortless Maid Booking"
                        is made to make your maid hiring experience 
                        much better and safer.
                    </p>
                    <p>We focus on technologies that promise to reduce costs, streamline processes and speed time-to-market, Backed by our strong quality processes and rich experience managing global... </p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h2>Useful Links</h2>
                    <ul class="list-unstyled link-list">
                        <li><a ui-sref="about" href="#about">About us</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="portfolio" href="#/portfolio">Services</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="products" href="#/products">Latest news</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="gallery" href="#/gallery">Features</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="contact" href="#/contact">Contact us</a><i class="fa fa-angle-right"></i></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 map-img">
                    <h2>Contact Us</h2>
                    <address class="md-margin-bottom-40">
                      MaidOnCall  <br/>
                       Shop No 3, <br/>
                        College Road, Nasik. <br/>
                        Phone: +91 8888241766 <br/>
                        Email: <a href="mailto:*********.com" class=""> MaidOnCall@gmail.com</a><br/>
                        Web: <a href="https:********.com/" class="">www.MaidOnCall.in</a>
                    </address>

                </div>
            </div>
        </div>
        

    </footer>




    </> 
    )
  }
}
export default Front;


  */

