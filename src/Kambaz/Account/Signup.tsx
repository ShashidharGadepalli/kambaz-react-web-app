import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/Kambaz/Account/Profile");
  };

  return (
    <div className="d-flex align-items-start p-4">
      <div className="flex-grow-1" style={{ maxWidth: 400 }}>
        <h1 className="mb-4">Sign Up</h1>
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="signupUsername">
            <Form.Control type="text" placeholder="username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupPassword">
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupFirstName">
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupLastName">
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="primary" type="submit" className="flex-fill" style={{ background: "#1677ff", border: "none", borderRadius: 8 }}>
              Sign Up
            </Button>
            <Link to="/Kambaz/Account/Signin" className="btn btn-outline-primary flex-fill" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Sign In
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
