import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function App() {
  const [people, setPeople] = useState(profiles);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();

    // Validation: non-empty
    if (!trimmed) {
      setError('Name is required');
      return;
    }

    // Validation: unique
    const exists = people.some(p => p.name.toLowerCase() === trimmed.toLowerCase());
    if (exists) {
      setError('Name already exists');
      return;
    }

    // Add new profile
    const newProfile = {
      id: Date.now(), // simple unique id
      name: trimmed,
      likes: 0,
    };
    setPeople([...people, newProfile]);

    // Clear input and error
    setName('');
    setError('');
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>

      {/* Form to add new profile */}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!!error}
          />
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>

      <Row xs={1} md={2} lg={3}>
        {people.map(p => (
          <Col key={p.id}>
            <ProfileCard person={p} setPeople={setPeople} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
