import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div className="d-flex align-items-start p-4">
      <div className="flex-grow-1" style={{ maxWidth: 400 }}>
        <h1 className="mb-4">Sign In</h1>
        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="signinUsername">
            <Form.Control type="text" placeholder="username" value="gadepalli.sa" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signinPassword">
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="primary" type="submit" className="flex-fill" style={{ background: "#1677ff", border: "none", borderRadius: 8 }}>
              Sign In
            </Button>
            <Link to="/Kambaz/Account/Signup" className="btn btn-outline-primary flex-fill" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Sign Up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
