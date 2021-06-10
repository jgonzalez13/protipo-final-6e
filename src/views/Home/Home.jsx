import { useEffect, useState } from 'react';

import { Col, Row } from 'reactstrap';
import './Home.scss';

const Home = () => {
  const [visibility, setvisibility] = useState(0);

  useEffect(() => {
    setvisibility(1);
  }, []);

  return (
    <div className="home d-flex align-items-center flex-column justify-content-center">
      <h1 className="text-capitalize">
        Olvídate de todo acerca del costo de tu inmueble
      </h1>

      <div>
        <p>Instantáneo todo. Precios increibles.</p>
      </div>

      <div>
        <button type="button">Empezar!</button>
      </div>

      <Row className="home--svg h-100 w-100" style={{ opacity: visibility }}>
        <Col className="home--left" lg={5} />
        <Col lg={2} />
        <Col className="home--right" lg={5} />
      </Row>

      <div className="home--clouds" style={{ opacity: visibility }} />
    </div>
  );
};

export default Home;
