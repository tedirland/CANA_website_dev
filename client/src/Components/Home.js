import React from 'react';
import { Container, Col, Row, Nav, Image, Card } from 'react-bootstrap';
import history from './history.jpg';
import './Home.css';

export default function Home() {
  return (
    <Container>
      <Card sm={8}>
        <Card.Img variant="top" src={history}></Card.Img>
        <hr />
        <Card.Title>
          Welcome to the Center Avenue Historic District, an architectural
          legacy created by the Bay City lumbermen, ship builders and
          industrialists who made their fortunes here in the mid 1800’s.
        </Card.Title>
        <Card.Body>
          The District was listed on the National Register of Historic Places in
          1982 and expanded in 2011. It includes an impressive collection of
          more than 875 structures in a wide array of styles including Gothic
          Revival, Second Empire, Greek revival, Italianate, Queen Anne,
          Richardson Romanesque, Tudor Revival, Georgian Revival, Arts & Crafts
          and Stick styles. Of particular note is the presence of many “Kit
          homes” designed, built and displayed here by the Aladdin and Lewis &
          Liberty companies which pioneered the manufacture of kit homes from
          their base of operations in Bay City.
        </Card.Body>
        <Card.Body>
          The Center Avenue Neighborhood Association was born from a need to
          preserve this rich legacy for future generations. Membership is
          available to all individuals and organizations who share our interest
          in protecting the historic character of the Center Avenue Historic
          District and the greater Bay City community (to learn about membership
          benefits, including the Interpretive Signage Program and the Historic
          Structure Plaque Program, please click here or on the “Become a
          Member” link at the top of this page). In addition, historic
          preservation grants and awards are also available, including a Trades
          Scholarship. For more details, including examples, please click on
          “History of CANA,” above.
        </Card.Body>
        <Card.Body>
          We invite you to stroll the neighborhood and imagine what it was like
          to live here when guests were delivered in horse-drawn carriages and
          entertained in third-floor ballrooms. Learn more about the characters
          who built their homes in the District and the distinctive character
          they created in Bay City’s most significant historic resource. There
          is a link to our walking tour brochure on the upper-left-hand side of
          this page; also, the Bay County Historical Society has a virtual tour
          of 51 properties within the district, using Google earth as the
          interactive “map” (you will need to download Google earth if you do
          not have it already). Using the “street view” option (person icon at
          right), you can travel down Center Avenue as if you were actually at
          street level and you have 360-degree control:
          www.bchsmuseum.org/id47.html. Last, you can see a map of the historic
          district by clicking on our link at the top of this page, or you can
          view the City of Bay City’s maps and see their list of addresses
          within the district at:
          http://www.baycitymi.org/355/Historic-Preservation.
        </Card.Body>
        <br />
        <a
          href="https://www.facebook.com/Centerave"
          target="_blank"
          rel="noreferrer"
        >
          Visit our Facebook page
        </a>
      </Card>
    </Container>
  );
}
