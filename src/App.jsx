import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';

export default function App() {
  // Store profiles in state
  const [people, setPeople] = useState(profiles);

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>
      <Row xs={1} md={2} lg={3}>
        {people.map(p => (
          <Col key={p.id}>
            {/* Pass the profile and setPeople to ProfileCard */}
            <ProfileCard person={p} setPeople={setPeople} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
