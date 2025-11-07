import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProfileCard({ person, setPeople }) {
  // Increment likes in state immutably
  const handleLike = () => {
    setPeople(ps =>
      ps.map(p =>
        p.id === person.id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>Likes: {person.likes}</Card.Text>
        <Button onClick={handleLike}>Like</Button>
      </Card.Body>
    </Card>
  );
}
