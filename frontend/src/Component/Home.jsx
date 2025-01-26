
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div className='homepage'>

            <div Class="Carosel" >
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./public/front4.jpg"
                            // src="./public/slide2.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5 className='carouselText'>First slide label</h5>
                            <p className='carouselText'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./public/front1.jpg"
                            // src="./public/slide1.jpg"
                            alt="Second slide"
                        />
                    
                        <Carousel.Caption>
                            <h5 className='carouselText'>Second slide label</h5>
                            <p className='carouselText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./public/front2.jpg"
                            // src="./public/slide3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5 className='carouselText'>Third slide label</h5>
                            <p className='carouselText'>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>








            <div id='welcome-note'>

                <div className="welcome-note1" >

                    <p id='notes'>
                        <h3>Welcome To</h3>
                        <h1>THE HUNGRY HEAVEN</h1>
                        <img src="./shape2.png" alt="" />
                        <br />

                        The Hungry Heaven has been serving delightful <br />experiences through
                        the art of cooking for four <br />decades. A cozy, relaxing space combined
                        with <br />flavourful dishes makes it a first choice for every foodie <br />in town.
                        It provides a wide range of items to choose <br />from and lets everyone
                        indulge in an experience of <br />pleasing their taste buds.
                        <br />
                        <br />
                        We provides a wide range of cuisines and dishes to <br />choose
                        from so that every foodie in town has their best <br />brexperience here.
                        <br />
                        <br />


                        We have
                        always won the hearts of our customers with <br />appetizing dishes
                        and friendly behaviour. It is the best <br />choice for everyone who
                        wants to enjoy the best <br />quality food at reasonable prices.
                    </p>
                </div>


                <div className="welcome-note2" >
                    <img src="public/welcomeimg.png" id='welc-img' />
                </div>

            </div>




            <div id='transparentdiv'>
                <h6>We Create Delicious Memories</h6>
                <h1>Eat Good Feel Good</h1>
            </div>






            <div id="our_special">
                <h6>The Hungry Heaven</h6>
                <h1>Our Speciality</h1>
                <img src="./shape2.png" alt="" />
                <p>We provide a wide range of cuisines and dishes to choose from so that every foodie in <br />town has their best experience with us.</p>

                <div id='specialMenu'>
                    <div id="specialMenu1">
                        <a href='/Bengali'><img src="./public/bengali-combo.jpg" /></a>
                        <div className="specialMenu1div" >
                            <h2>Bengali</h2>
                        </div>
                    </div>
                    <div id="specialMenu1">
                    <a href="/South"><img src="./public/south_indian.webp" /></a>
                        <div className="specialMenu1div" id='specialMenu1div-south'>
                            <h2>South Indian</h2>
                        </div>
                    </div>
                    <div id="specialMenu1">
                        <a href="/Chinese"><img src="./public/chinese.webp" /></a>
                        <div className = "specialMenu1div">
                            <h2>Chinese</h2>
                        </div>
                    </div>

                </div>

            </div>






            <div className="booktable">

                <h5>Book Your Table</h5>
                <h1>Make A Reservation</h1>
                <img src="./shape2.png" alt="" />
                <p>You can book your table online easily in just a couple of minutes. <br />We take reservations for lunch, just check the availability of your <br />table.</p>

                <div className="fromtable" >


                    <div className="row-box">

                        <div className='input-box'><input type="text" placeholder='Your Name' /></div>

                        <div className='input-box'><input type="email" placeholder='Email' /></div>

                        <div className='input-box'><input type="text" placeholder='Phone number' /></div>

                    </div>

                    <div className='message-box'><input type="text" placeholder='Message' /></div>

                    <div className='button-box'><button>Find A Table</button></div>


                </div>


            </div>














            



        </div>
    )
}
export default Home