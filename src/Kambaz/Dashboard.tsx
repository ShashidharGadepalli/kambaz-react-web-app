import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5610/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/webdev.jpg" width={200} />
                        <div>
                            <h5> CS5610 WebDev </h5>
                            <p className="wd-dashboard-course-title">
                                Web Development </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5800/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/algos.jpg" width={200} />
                        <div>
                            <h5> CS5800 Algorithms </h5>
                            <p className="wd-dashboard-course-title">
                                Algorithms </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5010/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/Pdp.jpg" width={200} />
                        <div>
                            <h5> CS010 PDP </h5>
                            <p className="wd-dashboard-course-title">
                                Programming Designs and Paradigms </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5100/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/FAI.jpg" width={200} />
                        <div>
                            <h5> CS5100 FAI</h5>
                            <p className="wd-dashboard-course-title">
                                Foundations of Artificial Intelligence </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5230/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/USML.jpg" width={200} />
                        <div>
                            <h5> CS5230 USML </h5>
                            <p className="wd-dashboard-course-title">
                                Unsupervised Machine Learning </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5180/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/dys.jpg" width={200} />
                        <div>
                            <h5> CS5300 FDS </h5>
                            <p className="wd-dashboard-course-title">
                                Foundations of Distributed Systems </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5400/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/DBMS.jpg" width={200} />
                        <div>
                            <h5> CS5400 DBMS </h5>
                            <p className="wd-dashboard-course-title">
                                Database Management Systems </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}
