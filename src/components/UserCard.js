import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function UserCard({user}){
    return(
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text><h3>my Email is {user.email}</h3></Card.Text>
    <div> <h5>for more information click here</h5>
    <Link to='/users/:id'>
     <Button variant="primary">Go somewhere</Button> 
     </Link>
     </div>
    </Card.Body>
</Card>
)
}
export default UserCard;