import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { BsGripVertical, BsPlus, BsFolderPlus, BsFileEarmarkPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function Assignments() {
  const assignments = [
    {
      code: "A1",
      name: "ENV + HTML",
      notAvailable: "July 2 at 12:00am",
      due: "July 6 at 11:59pm",
      id: 123,
    },
    {
      code: "A2",
      name: "CSS + BOOTSTRAP",
      notAvailable: "July 9 at 12:00am",
      due: "July 13 at 11:59pm",
      id: 124,
    },
    {
      code: "A3",
      name: "JAVASCRIPT + REACT",
      notAvailable: "July 16 at 12:00am",
      due: "July 20 at 11:59pm",
      id: 125,
    },
  ];
  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup style={{ maxWidth: 350 }}>
          <InputGroup.Text className="bg-white border-end-0">
            <FaSearch className="text-secondary" />
          </InputGroup.Text>
          <FormControl
            placeholder="Search for Assignment"
            className="border-start-0"
            style={{ minWidth: 200 }}
          />
        </InputGroup>
        <div>
          <Button variant="outline-secondary" className="me-2 px-3">
            <BsFolderPlus className="me-2" /> Group
          </Button>
          <Button variant="danger" className="px-3">
            <BsFileEarmarkPlus className="me-2" /> Assignment
          </Button>
        </div>
      </div>
      <div className="bg-light rounded p-0">
        <div className="d-flex align-items-center px-3 py-2 border-bottom">
          <BsGripVertical className="me-2 text-secondary" />
          <span className="fw-bold fs-5">ASSIGNMENTS</span>
          <span className="ms-auto text-secondary">40% of Total</span>
          <IoEllipsisVertical className="ms-3 text-secondary" />
        </div>
        {assignments.map((a) => (
          <div
            key={a.code}
            className="d-flex align-items-center bg-white mb-2 ms-2 me-2 rounded border border-0"
            style={{ borderLeft: "5px solid #198754" }}
          >
            <BsGripVertical className="ms-2 me-3 text-secondary" />
            <MdOutlineAssignment className="text-success fs-3 me-3" />
            <div className="flex-grow-1 py-3">
              <a
                href={`#/Kambaz/Courses/5610/Assignments/${a.id}`}
                className="fw-bold fs-5 mb-1 wd-assignment-link text-decoration-none text-dark"
              >
                {a.code} - {a.name}
              </a>
              <div className="text-muted small">
                <span className="fw-semibold text-success">Multiple Modules</span>
                {` | Not available until ${a.notAvailable} | `}
                <span className="fw-semibold">Due {a.due}</span>
                {" | 100 pts"}
              </div>
            </div>
            <FaCheckCircle className="text-success fs-4 me-3" />
            <IoEllipsisVertical className="text-secondary fs-4 me-3" />
          </div>
        ))}
      </div>
    </div>
  );
}