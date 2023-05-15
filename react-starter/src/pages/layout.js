import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
    <Container fluid="md" className="header">
      <Row>
        <Col><h1 className=''>FIND YOUR <b>EXPERT</b></h1></Col>
      </Row>
      <Row>
        <Col className="searchfield">
          <form className="">
            <input type="text" placeholder="Search"/>
            <input type="button" class="button" value="BOKA"></input>
          </form>
        </Col>
      </Row>
    </Container>
    )
  }

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
     <div className='nav'>
     <nav>
        <ul>
          <li>
            <Link to="/all">ALL</Link>
          </li>
          <li>
            <Link to="/frontend">FRONTEND</Link>
          </li>
          <li>
            <Link to="/backend">BACKEND</Link>
            <li>
            <Link to="/devops">DEVOPS</Link>
          </li>
          </li>
        </ul>
      </nav>
      </div>
    </>
  )
};

export default Layout;


 