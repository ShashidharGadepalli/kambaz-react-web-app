import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import * as db from "./Database";
export default function Dashboard() {
    const courses = db.courses;
    const courseImages: { [key: string]: string } = {
        CS5610: "/images/webdev.jpg",
        CS5800: "/images/algos.jpg",
        CS5010: "/images/Pdp.jpg",
        CS5100: "/images/FAI.jpg",
        CS5230: "/images/USML.jpg",
        CS5300: "/images/dys.jpg",
        CS5400: "/images/DBMS.jpg",
    };
    return (
        <div id="wd-dashboard" style={{ padding: '48px' }}>
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={2} lg={4} className="g-5">
                    {courses.map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "265px" }} key={course._id}>
                            <Card>
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src={courseImages[course._id] || "/images/webdev.jpg"} width="100%" height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name}
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description}
                                        </Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
