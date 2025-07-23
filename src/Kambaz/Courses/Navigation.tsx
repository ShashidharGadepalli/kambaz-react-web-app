import { Link, useLocation, useParams } from "react-router-dom";

const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
  "People"
];

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0" style={{ width: 180, minWidth: 180, maxWidth: 180 }}>
      {links.map((link) => {
        const path = `/Kambaz/Courses/${cid}/${link}`;
        const isActive = pathname.toLowerCase().includes(link.toLowerCase());
        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border border-0${isActive ? " active" : ""}`}
            id={`wd-course-${link.toLowerCase()}-link`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
