import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/esm/CardText';
import Placeholder from 'react-bootstrap/Placeholder';
import "./Bengali.css"

function Bengali() {
  return (
    <div className="bengali">
      <h1 id='bengali-food-heading' data-aos="zoom-in">Bengali Food</h1>
      <h3 id="bengali-food-h3" data-aos="zoom-in">You Can Give Your Order Here</h3>


      <div className="d-flex justify-content-around" id='bengali-food-top-space' data-aos="fade-up">
        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/veg01.jpg" />
          <Card.Body>
            <Card.Title>Veg Thali</Card.Title>
            <CardText>₹200</CardText>
            <Card.Text>
              A veg thali is a traditional Indian meal that offers a variety of dishes on a single plate.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/Fish thali.jpg" />
          <Card.Body>
            <Card.Title>Fish Thali</Card.Title>
            <CardText>₹500</CardText>
            <Card.Text>
              A fish thali is a traditional meal from coastal regions of India, around fish.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/ilish thali.jpeg" />
          <Card.Body>
            <Card.Title>Ilish Thali</Card.Title>
            <CardText>₹800</CardText>
            <Card.Text>
              An ilish thali, featuring the beloved hilsa (ilish) fish, in Bengali cuisine.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/moharaja03-thali.jpg" />
          <Card.Body>
            <Card.Title>Special Thali</Card.Title>
            <CardText>₹2000</CardText>
            <Card.Text>
              A Bengali special thali is a lavish meal that encapsulates the rich and traditions of Bengal.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>


      </div>



      <div className="d-flex justify-content-around" id='south-food-middle-space' >
        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/LUCHI ALOO DOM.jpg" />
          <Card.Body>
            <Card.Title>Luchi with Kasmiri Aloo Dum</Card.Title>
            <CardText>₹300</CardText>
            <Card.Text>
              Luchi is a deep-fried, puffy bread made from refined wheat flour (maida).

            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/BHAPA LLISH.webp" />
          <Card.Body>
            <Card.Title>Bhapa Ilish with Gravy</Card.Title>
            <CardText>₹500</CardText>
            <Card.Text>
              Bhapa Ilish or Shorshe Ilish Bhaape,Only 3 piceses
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/DAB CHINGRI.JPG" />
          <Card.Body>
            <Card.Title>Dab Chingri</Card.Title>
            <CardText>₹200</CardText>
            <Card.Text>
              Daab chingri is a popular Bengali dish.[4] It is often cooked during Pohela Boishakh, Raksha Bandhan and other events
            </Card.Text>
            <Button variant="primary">Order now</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/polao.jpg" />
          <Card.Body>
            <Card.Title>Polao with Mutton</Card.Title>
            <CardText>₹500</CardText>
            <Card.Text>
              About Basanti Pulao Also known as  Mithe Pulao, Basanti Pulao is a Bengai festive delight that is made  auspicious of Durga Puja. mutton 4 Picess
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>


      </div>


      <div className="d-flex justify-content-around" id='south-food-top-space'>
        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/Payesh.jpg" />
          <Card.Body>
            <Card.Title>Payesh</Card.Title>
            <CardText>₹150</CardText>
            <Card.Text>
              The first thing comes to mind when we say Milk based sweets are the "Bengali sweets".we get by curdling the milk
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/rabri.jpg" />
          <Card.Body>
            <Card.Title>Rabri</Card.Title>
            <CardText>₹80</CardText>
            <Card.Text>
              Rabri is a sweet, condensed-milk-based dish, made by boiling milk on low heat for a long time until it becomes dense and changes its colour to off-white or pale yellow.
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/kulfi.jpeg" />
          <Card.Body>
            <Card.Title>Rabri Kulfi</Card.Title>
            <CardText>₹60</CardText>
            <Card.Text>
              This one-of-a-kind kulfi will surely mesmerise you. BUY NOW. Ingredients; Nutritional Information. Close. Product Detail. Ingredients. Milk Solids, Sugar,
            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} id='cards'>
          <Card.Img variant="top" id="food-img" src="./public/mishti.webp" />
          <Card.Body>
            <Card.Title>Special Misti</Card.Title>
            <CardText>₹300</CardText>
            <Card.Text>

            </Card.Text>
            <Button variant="primary">Order NOW</Button>
          </Card.Body>
        </Card>


      </div>



    </div>
  );
}

export default Bengali;