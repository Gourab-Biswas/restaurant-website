import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/esm/CardText';
import Placeholder from 'react-bootstrap/Placeholder';
import "./South_indian.css"

function South_indian() {
  return (
    <div className="south">
      <h1 id='bengali-food-heading' data-aos="zoom-in">South Indian Food</h1>
      <h3 id="bengali-food-h3" data-aos="zoom-in">You Can Give Your Order Here</h3>

      <div className="d-flex justify-content-around" id='south-food-top-space' data-aos="fade-up">
        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="public/Food/UTTAPAM.jpg" />
          <Card.Body>
            <Card.Title>UTTAPAM </Card.Title>
            <CardText>₹300</CardText>
            <Card.Text>
              A traditional South Indian dish, akin to a thick pancake made from a fermented batter of rice and urad dal.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/Food/DOSA.jpg" />
          <Card.Body>
            <Card.Title>DOSA</Card.Title>
            <CardText>₹300</CardText>
            <Card.Text>
              A classic South Indian crepe made from a fermented batter of rice and urad dal.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/Food/IDLI.jpg" />
          <Card.Body>
            <Card.Title>IDLI</Card.Title>
            <CardText>₹450</CardText>
            <Card.Text>
              A traditional South Indian steamed rice cake made from a fermented batter of rice and urad dal.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/Food/SAMBAR.jpg" />
          <Card.Body>
            <Card.Title>SAMBAR</Card.Title>
            <CardText>₹200</CardText>
            <Card.Text>
              A tangy South Indian stew made with toor dal, vegetables, tamarind, and spices like coriander and fenugreek, served with rice or as a side dish.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

      </div>


      <div className="d-flex justify-content-around" id='south-food-middle-space'>
        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/Food/BISI BELE BATH.jpg" />
          <Card.Body>
            <Card.Title>BISI BELE BATH</Card.Title>
            <CardText>₹150</CardText>
            <Card.Text>
              A spicy and aromatic South Indian rice dish made with rice, toor dal, vegetables, tamarind, and a special blend of spices, garnished with fried cashews.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'> 
          <Card.Img variant="top" id="food-img" src="./public/Food/PONGAL.jpg" />
          <Card.Body>
            <Card.Title>PONGAL</Card.Title>
            <CardText>₹290</CardText>
            <Card.Text>
              A comforting South Indian dish made with rice and moong dal, flavored with ghee, cumin, black pepper, and cashews, often served during festivals and as a breakfast dish.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/Food/VADA.jpg" />
          <Card.Body>
            <Card.Title>VADA</Card.Title>
            <CardText>₹370</CardText>
            <Card.Text>
              A South Indian savory fritter made from fermented lentil batter, deep-fried to a golden brown perfection.
            </Card.Text>
            <Button variant="primary">Order now</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/Food/SAMBAR RICE .jpg" />
          <Card.Body>
            <Card.Title>SAMBAR RICE</Card.Title>
            <CardText>₹500</CardText>
            <Card.Text>
              A comforting South Indian stew made with toor dal, tamarind, vegetables, and aromatic spices, served over steamed rice.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>


      </div>

    </div>
  );
}

export default South_indian;