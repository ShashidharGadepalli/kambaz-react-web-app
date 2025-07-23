import { useRef, useState } from "react";
import { Form, Card, Row, Col, InputGroup } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";

interface DateInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

function DateInput({ value, onChange, ...props }: DateInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <InputGroup>
      <Form.Control
        type="date"
        ref={inputRef}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputGroup.Text
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (inputRef.current) {
            if (typeof inputRef.current.showPicker === 'function') {
              inputRef.current.showPicker();
            } else {
              inputRef.current.focus();
            }
          }
        }}
      >
        <FaCalendarAlt />
      </InputGroup.Text>
    </InputGroup>
  );
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find((a: any) => a._id === aid);
  const [dueDate, setDueDate] = useState(assignment?.due || "");
  const [availableFrom, setAvailableFrom] = useState(assignment?.notAvailable || "");
  const [availableUntil, setAvailableUntil] = useState(assignment?.due || "");

  return (
    <div className="p-4 d-flex justify-content-center">
      <Card style={{ minWidth: 400, maxWidth: 700, width: "100%" }}>
        <Card.Body>
          <Card.Title className="mb-4 fs-3">{assignment?.title || "Edit Assignment"}</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="assignmentName">
              <Form.Label>Assignment Name</Form.Label>
              <Form.Control type="text" defaultValue={assignment?.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="assignmentDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} defaultValue={""} />
            </Form.Group>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="assignmentPoints">
                  <Form.Label>Points</Form.Label>
                  <Form.Control type="number" defaultValue={assignment?.points || 100} />
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group className="mb-3" controlId="assignmentGroup">
                  <Form.Label>Assignment Group</Form.Label>
                  <Form.Select defaultValue="ASSIGNMENTS">
                    <option>ASSIGNMENTS</option>
                    <option>QUIZZES</option>
                    <option>EXAMS</option>
                    <option>PROJECT</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="displayGradeAs">
                  <Form.Label>Display Grade as</Form.Label>
                  <Form.Select defaultValue="Percentage">
                    <option>Percentage</option>
                    <option>Points</option>
                    <option>Complete/Incomplete</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="submissionType">
                  <Form.Label>Submission Type</Form.Label>
                  <Form.Select defaultValue="Online">
                    <option>Online</option>
                    <option>On Paper</option>
                    <option>No Submission</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="onlineEntryOptions">
              <Form.Label className="fw-bold">Online Entry Options</Form.Label>
              <div className="ms-3">
                <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
                <Form.Check type="checkbox" label="Website URL" id="wd-website-url" />
                <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" />
                <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" />
                <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload" />
              </div>
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="assignTo">
                  <Form.Label>Assign to</Form.Label>
                  <Form.Control type="text" defaultValue="Everyone" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="dueDate">
                  <Form.Label>Due</Form.Label>
                  <DateInput value={dueDate} onChange={e => setDueDate(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="availableFrom">
                  <Form.Label>Available from</Form.Label>
                  <DateInput value={availableFrom} onChange={e => setAvailableFrom(e.target.value)} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="availableUntil">
                  <Form.Label>Until</Form.Label>
                  <DateInput value={availableUntil} onChange={e => setAvailableUntil(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-end">
              <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
              <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-primary">Save</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}