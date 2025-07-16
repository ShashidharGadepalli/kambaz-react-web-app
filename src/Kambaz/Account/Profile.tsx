import { Form, Button } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleSignout = () => {
    navigate("/Kambaz/Account/Signin");
  };

  return (
    <div className="d-flex align-items-start p-4">
      <div className="flex-grow-1" style={{ maxWidth: 400 }}>
        <h1 className="mb-4">Profile</h1>
        <Form>
          <Form.Group className="mb-3" controlId="profileUsername">
            <Form.Control type="text" placeholder="username" defaultValue="Shashiii" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profilePassword">
            <Form.Control type="password" placeholder="password" defaultValue="123456" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profileFirstName">
            <Form.Control type="text" placeholder="First Name" defaultValue="Sasidhar" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profileLastName">
            <Form.Control type="text" placeholder="Last Name" defaultValue="Gadepalli" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profileDob">
            <div style={{ position: 'relative' }}>
              <Form.Control 
                type="date" 
                placeholder="mm/dd/yyyy" 
                defaultValue="2001-05-27"
                style={{ paddingRight: '40px' }}
              />
              <FaCalendarAlt 
                style={{ 
                  position: 'absolute', 
                  right: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#6c757d'
                }}
                onClick={(e) => {
                  const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                  if (input.showPicker) {
                    input.showPicker();
                  } else {
                    input.focus();
                  }
                }}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="profileEmail">
            <Form.Control type="email" placeholder="email" defaultValue="shashi.gadepalli@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profileRole">
            <Form.Select defaultValue="User">
              <option value="User">User</option>
              <option value="admin">admin</option>
              <option value="faculty">faculty</option>
              <option value="student">student</option>
            </Form.Select>
          </Form.Group>
          <Button 
            variant="danger" 
            type="button" 
            className="w-100" 
            style={{ borderRadius: 8 }}
            onClick={handleSignout}
          >
            Signout
          </Button>
        </Form>
      </div>
    </div>
  );
}
