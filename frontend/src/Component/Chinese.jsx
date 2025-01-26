import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/esm/CardText';
import Placeholder from 'react-bootstrap/Placeholder';
import "./Chinese.css"
const Chinese = () => {
  return (
    <div className="chinese">
       <h1 id='bengali-food-heading' data-aos="zoom-in">Chinese Food</h1>
       <h3 id="bengali-food-h3" data-aos="zoom-in">You Can Give Your Order Here</h3>
      <div className="d-flex justify-content-around" id='chinese-food-top-space' data-aos="fade-up">
        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="public/chines.img/CHILI CHICKEN.jpg" />
          <Card.Body>
            <Card.Title>CHILI CHICKEN</Card.Title>
            <CardText>₹350</CardText>
            <Card.Text>
              A spicy, stir-fried chicken dish with bold chili and garlic flavors.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="public/chines.img/CHILI PANEER.jpg" />
          <Card.Body>
            <Card.Title>CHILI PANEER</Card.Title>
            <CardText>₹400</CardText>
            <Card.Text>
              A  spicy, tangy stir-fry featuring paneer cubes in a flavorful chili sauce.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="public/chines.img/CHOWMIN.jpg" />
          <Card.Body>
            <Card.Title>CHOWMIN</Card.Title>
            <CardText>₹250</CardText>
            <Card.Text>
              A savory stir-fried noodle dish with vegetables and optional meat or tofu.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="public/chines.img/MANCHOW SOUP.jpg" />
          <Card.Body>
            <Card.Title>MANCHOW SOUP</Card.Title>
            <CardText>₹300</CardText>
            <Card.Text>
              A spicy, tangy Chinese soup with crispy noodles and vegetables.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>


      </div>



      <div className="d-flex justify-content-around" id='chinese-food-middle-space'>
        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="public/chines.img/MIXED FRIED RICE.jpg" />
          <Card.Body>
            <Card.Title>MIXED FRIED RICE</Card.Title>
            <CardText>₹380</CardText>
            <Card.Text>
              A savory rice dish stir-fried with vegetables, meat, and aromatic seasonings.


            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="public/chines.img/DIMSUMS.jpg" />
          <Card.Body>
            <Card.Title>DIMSUMS</Card.Title>
            <CardText>₹800</CardText>
            <Card.Text>
              A bite-sized dumplings or small dishes with various fillings, often steamed or fried.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="public/chines.img/SPRING ROLLS.jpg" />
          <Card.Body>
            <Card.Title>SPRING ROLLS</Card.Title>
            <CardText>₹370</CardText>
            <Card.Text>
              A crispy, savory rolls filled with vegetables or meat and often served with a dipping sauce.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="public/chines.img/CHICKEN MANCHURIAN.jpg" />
          <Card.Body>
            <Card.Title>CHICKEN MANCHURIAN</Card.Title>
            <CardText>₹350</CardText>
            <Card.Text>
              A spicy, tangy dish with battered chicken chunks in a flavorful sauce.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>


      </div>


    </div>
  )
}

export default Chinese