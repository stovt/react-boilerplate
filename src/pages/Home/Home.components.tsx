import * as React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { FormattedMessage } from 'react-intl';

const Home: React.FC = () => (
  <Row>
    <Col xs={12}>
      <h2>
        <FormattedMessage id='pages.home.title' />
      </h2>
    </Col>
  </Row>
);

export default Home;
