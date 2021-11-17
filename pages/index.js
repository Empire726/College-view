import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Navbar'
import contact from '../Contact'
import Header2 from '../Navbar'
import Link from "next/link"
import header from './header'
import Meta from "../pages/Meta"
import Script from 'next/script'
import Item from "../pages/Item"
import Data from "../pages/Data"
import Coll from "../pages/Coll"
import component from './component'
import Net from "../pages/Net"
import 'bootstrap/dist/css/bootstrap.min.css'
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import head from 'next/head'


export default function name() {
  return (<>
    <div>
      <head>
        <meta charSet="utf-8" />
        <title>Apna College</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Free Website Template" name="keywords" />
        <meta content="Free Website Template" name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Font */}
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* CSS Libraries */}
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" /></head>
      {/* Top Bar Start */}
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="logo">
                <a href="index.html">
                  <h1>Apna<span>College</span></h1>
                  {/* <img src="images/logo.png" alt="Logo"/> */}
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
              <div className="row">
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="far fa-clock" />
                    </div>
                    <div className="top-bar-text">
                      <h3>ADDMISSION Open</h3>
                      <p>Session... 2021-2021</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="fa-mouse-pointer" />
                    </div>
                    <div className="top-bar-text">
                      <h3>GET COUNSELLING</h3>
                      <p>Session... 2021-2021</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="fa fa-arrow-right" />
                    </div>
                    <div className="top-bar-text">
                      <h3>MORE INFORMATION</h3>
                      <p>VISIT--<a href="#">Apnacollage.in</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Bar End */}
      {/* <Navbar/> */}
      {/* Nav Bar Start */}
      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a href="#" className="navbar-brand">MENU</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">Top Universities</a>
                <a href="service.html" className="nav-item nav-link">Top Course</a>
                <a href="price.html" className="nav-item nav-link">College</a>
                <a href="location.html" className="nav-item nav-link">EXAM</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle dropbtn">All Courses</a>
                  <div className="dropdown-content">
                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                    <a href="single.html" className="dropdown-item">Detail Page</a>
                    <a href="team.html" className="dropdown-item">Team Member</a>
                    <a href="booking.html" className="dropdown-item">Schedule Booking</a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
              <div className="ml-auto">
                <a className="btn btn-custom" href="#">Get Appointment</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Nav Bar End */}
      {/* Carousel Start */}
      <div className="carousel">
        <div className="container-fluid">
          <div className="owl-carousel">
            <div className="carousel-item">
              <div className="carousel-img">
                {/* <img src="/images/How-to-start-a-blog-for-free-in-India.webp" height={400} width={600} alt="Image" /> */}
              </div>
              <div className="carousel-text">
                <h3>heading you define Study &amp; Detailing</h3>
                <h2>MOBILE APP FOR </h2>
                <p>
                  Find Over 250+ Exams in India .Know your chances of Admission,Latest News & Stories.
                </p>
                <a className="btn btn-custom" href="">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      {/* <div className={styles["home-div"]}>
      <div className={styles["body_div"]}>
        <div className={styles["headering"]}>
          <h3>MOBILE APP FOR </h3>
          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <Link href="submit"><i className="fa fa-search"></i></Link>
            </form>
          </div>
          <div className={styles["images"]}>
            <span >The Easiest and feature as packed market
            </span> <br />
          </div>
            <button className={styles["none"]}>  <a className="btn btn-custom" href="">Explore More</a></button>
          <button className={styles["none"]}> <Link href="client">Read more</Link></button>
        </div>
        <div className={styles["images"]}>
            {/* <img src="/images/header-iphone.png" width={450} */}
            {/* height={500} /> */}
        {/* </div>
      </div>
    </div> */} 
      {/* About End */}

      {/* --------------------------------------------------------------------3rd screen------- */}

     <div className={styles["collage"]}>
       <div className={styles["feature"]}>
         <div className={styles["border"]}>
           <h3 className={styles["border_div"]}>CHOOSE YOUR FUTURE</h3>

         </div>
         <div className={styles["name"]}><p className={styles["naming"]}>College.com is an extensive search engine for the students, parents,
           and education industry players who are seeking information</p>
         </div>
       </div>
       {Data.map((item, index) => {
         return (
           <div className={styles["card"]} key={index} >
             <div className={styles["card-div"]}><img src={item.url} height={80} width={80} /> </div>
             <h4>{item.heading4}</h4>
             <p>{item.para}</p>
           </div>
         );
       })}
     </div>



      {/* Service Start */}
      <div className="service">
        <div className="container">
          <div className="section-header text-center">
            <p>What We Do?</p>
            <h2>Premium Study Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-wash-1" />
                <h3>Exterior Study</h3>
                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-wash" />
                <h3>Interior Study</h3>
                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-vacuum-cleaner" />
                <h3>Vacuum Cleaning</h3>
                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-seat" />
                <h3>Seats Study</h3>
                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-service" />
                <h3>Window Wiping</h3>
                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-service-2" />
                <h3>Wet Cleaning</h3>
                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-wash" />
                <h3>Oil Changing</h3>
                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-brush-1" />
                <h3>Brake Reparing</h3>
                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Facts Start */}
      {/* <div className="facts" data-parallax="scroll" data-image-src="img/facts.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-map-marker-alt" />
                <div className="facts-text">
                  <h3 data-toggle="counter-up">25</h3>
                  <p>Service Points</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-user" />
                <div className="facts-text">
                  <h3 data-toggle="counter-up">350</h3>
                  <p>Engineers &amp; Workers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-users" />
                <div className="facts-text">
                  <h3 data-toggle="counter-up">1500</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-check" />
                <div className="facts-text">
                  <h3 data-toggle="counter-up">5000</h3>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Facts End */}
      {/* Price Start */}
      <div className="price">
        <div className="container">
          <div className="section-header text-center">
            <p>Study Plan</p>
            <h2>Choose Your Plan</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header">
                  <h3>Basic Planning</h3>
                  <h2><span>$</span><strong>25</strong><span>.99</span></h2>
                </div>
                <div className="price-body">
                  <ul>
                    <li><i className="far fa-check-circle" />Seats Study</li>
                    <li><i className="far fa-check-circle" />Exam Notes</li>
                    <li><i className="far fa-check-circle" />Exam Tips</li>
                    <li><i className="far fa-times-circle" />Paper Tricks</li>
                    <li><i className="far fa-times-circle" />Window Wiping</li>
                  </ul>
                </div>
                <div className="price-footer">
                  <a className="btn btn-custom" href>Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-item featured-item">
                <div className="price-header">
                  <h3>Premium Study</h3>
                  <h2><span>$</span><strong>35</strong><span>.99</span></h2>
                </div>
                <div className="price-body">
                  <ul>
                    <li><i className="far fa-check-circle" />Seats Study</li>
                    <li><i className="far fa-check-circle" />Practical Exam</li>
                    <li><i className="far fa-check-circle" />Practical Notes</li>
                    <li><i className="far fa-check-circle" />Exam Short Notes</li>
                    <li><i className="far fa-times-circle" />Viva Notes</li>
                  </ul>
                </div>
                <div className="price-footer">
                  <a className="btn btn-custom" href>Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header">
                  <h3>Complex Study</h3>
                  <h2><span>$</span><strong>49</strong><span>.99</span></h2>
                </div>
                <div className="price-body">
                  <ul>
                    <li><i className="far fa-check-circle" />Major Exam</li>
                    <li><i className="far fa-check-circle" />Minor EXam</li>
                    <li><i className="far fa-check-circle" />Question Paper</li>
                    <li><i className="far fa-check-circle" />Mul-tipal Question</li>
                    <li><i className="far fa-check-circle" />Window Wiping</li>
                  </ul>
                </div>
                <div className="price-footer">
                  <a className="btn btn-custom" href>Open Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Price End */}
      {/* Location Start */}
      <div className="location">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-header text-left">
                <p>Study Points</p>
                <h2> Study &amp; Exam Points</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt" />
                    <div className="location-text">
                      <h3>Study Point</h3>
                      <p>123 Street,INDIA, Hissar</p>
                      <p><strong>Call:</strong>+012 345 6789</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt" />
                    <div className="location-text">
                      <h3> Study Point</h3>
                      <p>123 Street,INDIA, Hissar</p>
                      <p><strong>Call:</strong>+012 345 6789</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt" />
                    <div className="location-text">
                      <h3>Study Point</h3>
                      <p>123 Street, INDIA, Hissar</p>
                      <p><strong>Call:</strong>+012 345 6789</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt" />
                    <div className="location-text">
                      <h3>Study Point</h3>
                      <p>123 Street,INDIA, Hissar</p>
                      <p><strong>Call:</strong>+012 345 6789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="location-form">
                <h3>Request for a Consult</h3>
                <form>
                  <div className="control-group">
                    <input type="text" className="form-control" placeholder="Name" required="required" />
                  </div>
                  <div className="control-group">
                    <input type="email" className="form-control" placeholder="Email" required="required" />
                  </div>
                  <div className="control-group">
                    <textarea className="form-control" placeholder="Description" required="required" defaultValue={""} />
                  </div>
                  <div>
                    <button className="btn btn-custom" type="submit">Send Request</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location End */}

      {/* ------------------------------------------------feature------------------------------------------- */}

     <div className={styles["collage"]}>
       <div className={styles["feature"]}>
         <div className={styles["border"]}>
           <h3 className={styles["border_div"]}>CONFEXPLORE ALMOST EVERYTHINGIGURING</h3>

         </div>
         <div className={styles["name"]}> <p className={styles["naming"]}>College.com is an extensive search engine for the students, parents,
           and education industry players who are seeking information</p>
         </div>
       </div>
       {Item.map((item, index) => {
         return (
           <div className={styles["card"]} key={index} >
             <div className={styles["card-div"]}><img src={item.url} height={80} width={80} /> </div>
             <h4>{item.heading4}</h4>
             <p>{item.para}</p>
           </div>
         );
       })}
     </div>
      {/* ------------------------------------------------table------------------------------------------ */}
      <div className="tables"><h3>BE/B.Tech College Ranking 2021</h3>
    <table id="customers">
      <tr>
        <th>Collage</th>
        <th>Ranking</th>
        <th>Stream</th>
      </tr>
      <tr>
        <td>Indian Institute of Technology - [IIT], New Delhi</td>
        <td>1 out of 300</td>
        <td>Engineering</td>
      </tr>
      <tr>
        <td>Indian Institute of Technology - [IIT], Kharagpur</td>
        <td>2 out of 300</td>
        <td>Engineering</td>
      </tr>
      <tr>
        <td>IIT Bombay - Indian Institute of Technology, Mumbai</td>
        <td>3 out of 300</td>
        <td>Engineering</td>
      </tr>
      <tr>
        <td>Indian Institute of Technology - [IIT], Kanpur</td>
        <td>4 out of 300</td>
        <td>Engineering</td>
      </tr>
      <tr>
        <td>Indian Institute of Technology - [IIT], Roorkee</td>
        <td>5 out of 300</td>
        <td>Engineering</td>
      </tr>
      <tr>
        <td>Indian Institute of Technology Madras - [IITM], Chennai</td>
        <td>6 out of 300</td>
        <td>Engineering</td>
      </tr>
      <tr>
        <td>Indian Institute of Technology - [IIT], Roorkee</td>
        <td>7 out of 300</td>
        <td>Engineering</td>
      </tr>
      <tr>
        <td>Indian Institute of Technology - [IIT], Roorkee</td>
        <td>8 out of 300</td>
        <td>Engineering</td>
      </tr>
      
    </table>
      </div>




      {/* Team Start */}
      <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <p>Meet Our Team</p>
            <h2>Our Engineers &amp; Workers</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/images/testimonial-3.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>NAME</h2>
                  <p>Engineer</p>
                  <div className="team-social">
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-linkedin-in" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/images/testimonial-2.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>NAME</h2>
                  <p>Engineer</p>
                  <div className="team-social">
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-linkedin-in" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/images/testimonial-1.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>NAME</h2>
                  <p>Worker</p>
                  <div className="team-social">
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-linkedin-in" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/images/testimonial-4.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>NAME</h2>
                  <p>Worker</p>
                  <div className="team-social">
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-linkedin-in" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Testimonial Start */}
      <div className="testimonial">
        <div className="container">
          <div className="section-header text-center">
            <p>Testimonial</p>
            <h2>What our clients say</h2>
          </div>
          <div className="owl-carousel testimonials-carousel">
            <div className="testimonial-item">
              <img src="images/testimonial-1.jpg" alt="Image" />
              <div className="testimonial-text">
                <h3>Client Name</h3>
                <h4>Profession</h4>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <img src="images/testimonial-2.jpg" alt="Image" />
              <div className="testimonial-text">
                <h3>Client Name</h3>
                <h4>Profession</h4>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <img src="images/testimonial-3.jpg" alt="Image" />
              <div className="testimonial-text">
                <h3>Client Name</h3>
                <h4>Profession</h4>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <img src="images/testimonial-4.jpg" alt="Image" />
              <div className="testimonial-text">
                <h3>Client Name</h3>
                <h4>Profession</h4>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* ------------------------------------------------------------------------------------ */}

     <div className={styles["courses-exam"]}>
        <div className={styles["border"]}>
          <h3 className={styles["border_div"]}>TOP Exam</h3>
      
       </div>
       <div className={styles["exam"]}>
         {Net.map((item, index) => {
           return (
             <div className={styles["card"]} key={index} >
               <div className={styles["card-div"]}>
                 <h3>{item.heading4}</h3>
                 <span>JEE Main is a National level test conducted for B.E./BTech and B.Arch admissions after className 12.</span>
                 <li className={styles["cards"]}><Link href="#"><a>{item.para}</a></Link></li>
               </div>
             </div>
           );
         })}
       </div>
     </div>
     {/* ---------------------------------------------------------------------------------------------------------- */}
      <div className={styles["Courses"]}>
        <div className={styles["Courses-div"]}>
          <h3>TOP COURSES</h3>
        </div>
        <div className={styles["Course-div"]}>
          {Meta.map((item, index) => {
            return (<>
              <div className={styles["Courses-btns"]} key={index} >
                <div className={styles["Course-btns"]}>
                  <a>{item.para}</a>
                </div>
              </div>
            </>);
          })}
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------- */}

    <div className={styles["courses-exa"]}>
      <div className={styles["cour-div"]}>
        <h3>TOP FEATURED COLLEGES OF INDIA</h3>
        <span className={styles["name"]}>College.com is an extensive search engine for the students, parents,
          and education industry players who are seeking information</span>
      </div>
        <div className={styles["feature-div"]}  >
      {Coll.map((item, index) => {
          return (
              <div className={styles["feat-1"]} key={index}>
              <img src={item.url} height={150} width={280}/>
              <div className={styles["card-div"]}>
                <div className={styles["card-d"]}>
                <h3>{item.para}</h3>
                <p>JEE Main is a National level test conducted for B.E./BTech and B.Arch admissions after className 12.</p>
                <Link href="#"><a>{item.heading4}</a></Link>
                </div>
              </div>
            </div>

          );
        })}
      </div>
    </div>

   {/* ---------------------------------------------------------------------------------------------------------- */}

      {/* Blog Start */}
      <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Blog</p>
            <h2>Latest news &amp; articles</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="images/25787_LPU_APP.jpg" alt="Image" />
                  <div className="meta-date">
                    <span>01</span>
                    <strong>SEP</strong>
                    <span>2021</span>
                  </div>
                </div>
                <div className="blog-text">
                  <h3><a href="#">Lorem ipsum dolor sit amet</a></h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
                  </p>
                </div>
                <div className="blog-meta">
                  <p><i className="fa fa-user" /><a href>Admin</a></p>
                  <p><i className="fa fa-folder" /><a href>Web Design</a></p>
                  <p><i className="fa fa-comments" /><a href>15 Comments</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="images/1509430807cover.jpg" alt="Image" />
                  <div className="meta-date">
                    <span>01</span>
                    <strong>SEP</strong>
                    <span>2021</span>
                  </div>
                </div>
                <div className="blog-text">
                  <h3><a href="#">Lorem ipsum dolor sit amet</a></h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
                  </p>
                </div>
                <div className="blog-meta">
                  <p><i className="fa fa-user" /><a href>Admin</a></p>
                  <p><i className="fa fa-folder" /><a href>Web Design</a></p>
                  <p><i className="fa fa-comments" /><a href>15 Comments</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="images/1614949268bg.jfif" alt="Image" />
                  <div className="meta-date">
                    <span>01</span>
                    <strong>SEP</strong>
                    <span>2021</span>
                  </div>
                </div>
                <div className="blog-text">
                  <h3><a href="#">Lorem ipsum dolor sit amet</a></h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
                  </p>
                </div>
                <div className="blog-meta">
                  <p><i className="fa fa-user" /><a href>Admin</a></p>
                  <p><i className="fa fa-folder" /><a href>Web Design</a></p>
                  <p><i className="fa fa-comments" /><a href>15 Comments</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Footer Start */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact">
                <h2>Get In Touch</h2>
                <p><i className="fa fa-map-marker-alt" />14 Street, HISSAR, INDIA</p>
                <p><i className="fa fa-phone-alt" />+012 345 67890</p>
                <p><i className="fa fa-envelope" />APNACOLLEGE@example.com</p>
                <div className="footer-social">
                  <a className="btn" href><i className="fab fa-twitter" /></a>
                  <a className="btn" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn" href><i className="fab fa-youtube" /></a>
                  <a className="btn" href><i className="fab fa-instagram" /></a>
                  <a className="btn" href><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Popular Links</h2>
                <a href>About Us</a>
                <a href>Contact Us</a>
                <a href>Our Service</a>
                <a href>Service Points</a>
                <a href>MORE Plan</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Useful Links</h2>
                <a href>Terms of use</a>
                <a href>Privacy policy</a>
                <a href>Cookies</a>
                <a href>Help</a>
                <a href>FQAs</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <h2>Newsletter</h2>
                <form>
                  <input className="form-control" placeholder="Full Name" />
                  <input className="form-control" placeholder="Email" />
                  <button className="btn btn-custom">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>© <a href="#">Your Site Name</a>, All Right Reserved. Designed By <a href="APNADOCTOR.IN">NEXT CODER</a></p>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to top button */}
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
      {/* Pre Loader */}
      {/* <div id="loader" className="show">
                    <div className="loader" />
                </div> */}
      {/* JavaScript Libraries */}
      {/* Contact Javascript File */}
      {/* Template Javascript */}
      {/* -------------------------------------------------------shimer effect start--------------------------------------- */}
      {/* <div id="loader" className="show"> */}
      {/* <div className="main-item">
      <div className="static-background">
        <div className="background-masker btn-divide-left"></div>
      </div>

      <div className="animated-background">
        <div className="background-masker btn-divide-left"></div>
      </div>

      <div className="shared-dom">
        <div className="sub-rect pure-background"></div>
        <div className="sub-rect pure-background"></div>
        <div className="sub-rect pure-background"></div>
        <div className="sub-rect pure-background"></div>
        <div className="sub-rect pure-background"></div>
        <div className="sub-rect pure-background"></div>
        <div className="sub-rect pure-background"></div>
        <div className="sub-rect pure-background"></div>
      </div>

      <div className="css-dom"></div> */}
        {/* </div> */}
        {/* </div> */}
      {/* -------------------------------------------------------shimmer effect ends--------------------------------------- */}

    </div>
  </>
  );
}
// -------------------------------------------------------------------Home---------------------------------------------

// export default function Home() {
//   return (<>

//     <Navbar />

//     <div className={styles["home-div"]}>
//       <div className={styles["body_div"]}>
//         <div className={styles["headering"]}>
//           <h3>MOBILE APP FOR </h3>
//           <div className="search-container">
//             <form action="/action_page.php">
//               <input type="text" placeholder="Search.." name="search" />
//               <Link href="submit"><i className="fa fa-search"></i></Link>
//             </form>
//           </div>
//           <div className={styles["images"]}>
//             <span >The Easiest and feature as packed market
//             </span> <br />
//           </div>
//           <button className={styles["none"]}> <Link className="btn btn-custom" href="">Explore More</Link></button>
//           <button className={styles["none"]}> <Link href="client">Read more</Link></button>
//         </div>
//         <div className={styles["images"]}>
          {/* <img src="/images/header-iphone.png" width={450} */}
          {/* height={500} /> */}
    //     </div>
    //   </div>
    // </div>
    
    




   
    {/* ------------------------------------------------------------------------------------ */}
 
   



    // {/* -------------------------------------------------------------------------- */}
    // <div className={styles["annualy"]}>
    //   <div className={styles["display-col"]}>
    //     <div className={styles["headering"]}>
    //       <div className={styles["display-col"]}>

    //         <img src="/images/details-1-iphone.png" width={500}
    //           height={500} />


    //         <div className={styles["line"]}>
    //           <h3>READING MODE</h3>
    //           <span>Leno can easily help you track your personal development evolution
    //             if you take the time to properly setup your goals at the beginning of
    //             the training process. Check out the details</span>
    //           <button className={styles["btn"]}>Read more</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // {/* --------------------------------------------------------------------II-ND------- */}
    // <div className={styles["annualy"]}>
    //   <div className={styles["display-col"]}>
    //     <div className={styles["headering"]}>
    //       <div className={styles["display-col"]}>
    //         <div className={styles["line"]}>
    //           <h3>EXAM MODE</h3>
    //           <span>The calendar input function enables the user to setup training, meditation and relaxation sessions with ease. Just open the feature and start setting up your time as you desire

    //             READ MORE</span>
    //           <button className={styles["btn"]}>Read more</button>
    //         </div>
    //         <img src="/images/details-2-iphone.png" width={500}
    //           height={500} />
    //       </div>


    //     </div>
    //   </div>
    // </div>
   

    {/* ------------------------------footer------------------------------END 3RD SCREEN------------------------------------------- */}
    {/* <div className={styles.footer}>
    
      <div className={styles['footer-menu-wrapper']}>
        <div className={styles['footer-menu']}>
          <h4>Top Colleges</h4>
          <span><a exact href="/trans">M.B.A</a></span>
          <span><a exact href="/Categrey">B.Tech/B.E</a></span>
          <span><a exact href="/plan">M.Tech</a></span>
         <span><a exact href="/contact">BCA</a></span>
          <span><a exact href="/plan">MCA</a></span>
          <span><a exact href="/contact">MA</a></span>
          <span><a exact href="/contact">BA</a></span>
        </div>
        <div className={styles['footer-menu']}>
          <h4>Top Universities</h4>
          <span><a exact href="/Categrey">Engineering</a></span>
          <span><a exact href="/plan">Management</a></span>
          <span><a exact href="/contact">Medical</a></span>
          <span><a exact href="/plan">Law</a></span>
          <span><a exact href="/contact">Commerce</a></span>
          <span><a exact href="/plan">SCIENCE</a></span>
          <span><a exact href="/contact">Arts</a></span>
        </div>
        <div className={styles['footer-menu']}>
          <h4>Top Exam</h4>
          <span><a exact href="/trans">CAT</a></span>
          <span><a exact href="/Categrey">GATE</a></span>
          <span><a exact href="/plan">JEE-MAIN</a></span>
          <span><a exact href="/contact">NEET</a></span>
          <span><a exact href="/plan">XAT</a></span>
          <span><a exact href="/contact">CLAT</a></span>
          <span><a exact href="/contact">MAT</a></span>
        </div>     
        <div className={styles['footer-menu']}>
          <h4>Top Exam</h4>
          <span><a exact href="/trans">CAT</a></span>
          <span><a exact href="/Categrey">GATE</a></span>
          <span><a exact href="/plan">JEE-MAIN</a></span>
          <span><a exact href="/contact">NEET</a></span>
          <span><a exact href="/plan">XAT</a></span>
          <span><a exact href="/contact">CLAT</a></span>
          <span><a exact href="/contact">MAT</a></span>
        </div>
        <div className={styles['footer-menu']}>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="+918708353430">Phone</a>
          <a href="#">Location</a>
          <a href="#">Youtube</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms {'&'} Conditions</a>
        </div>
      </div>
    </div> */}

   
    {/* -------------------------------------------------------news latter ends--------------------------------------- */}
  

    {/* -------------------------------------------------------news latter ends--------------------------------------- */}
    
   
//   </>
//   )
// }
