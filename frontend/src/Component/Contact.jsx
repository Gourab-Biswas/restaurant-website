import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (

    <div id='contact' data-aos="fade">
      <img id='con-img' src="public/img7.jpg"></img>

      <div id='con-note' data-aos="zoom-in">
        <h1 id='contact-us' >Contact Us</h1>
      </div>
      <div id='cng-note' data-aos="fade-up">
        <h5 id='note'>Home &gt;Contact Us</h5>
      </div>


      <div class="parent">
        <div class='text'>

          <p>
            <br></br><br></br>Feel free to reach us.
          </p>

          <p>
            We are all ears for your f'eat'back and queries.
            Contact us now, and <br></br>we will get back to you.
          </p>


          <h5>Our Addresses</h5>
          <p>34, Karl Marx Sarani, Kidderpore,<br></br> Kolkata</p>
          <p>
            9, Kazi Nazrul Islam Avenue<br></br>Kaikhali Crossing,
            <br></br>Kolkata- 700052
          </p>

          <h5>Follow Us</h5>
          <button class='butt'>
            <i class="ri-facebook-box-fill"></i>
          </button>
          <button class='butt'>
            <i class="ri-twitter-fill"></i>
          </button>
          <button class='butt'>
            <i class="ri-instagram-fill"></i>
          </button >


          

          <div class='email-call'>
            <h5>Email Id:</h5>
            <p>info@indiarestaurant.in</p>
            <h5><br></br>Call Us Now</h5>
            <p>+91 9476438623 <br></br>+91 9883490865 <br></br>+033 4804 9142<br></br> +91 99039 80011</p>
          </div>
        </div>

        <div class='opening-time'>
          <img id='con-img2' src="public/1img.png"></img>
        </div>
      </div>


      <div className="fromtable">


                    <div className="row-box">

                        <div className='input-box'><input type="text" placeholder='Your Name' /></div>

                        <div className='input-box'><input type="email" placeholder='Email' /></div>

                        <div className='input-box'><input type="text" placeholder='Phone number' /></div>

                    </div>

                    <div className='message-box'><input type="text" placeholder='Message' /></div>

                    <div className='button-box'><button>Find A Table</button></div>


                </div>
    </div>
  )
}
export default Contact
