import { useState } from "react";
export default function Modules() {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div>
            <button>Collapse All</button>
            <button>View Progress</button>
            <div style={{ display: "inline-block", position: "relative" }}>
                <button onClick={() => setShowDropdown(!showDropdown)}>
                    Publish All ▼
                </button>
                {showDropdown && (
                    <ul style={{
                        position: "absolute",
                        background: "white",
                        border: "1px solid #ccc",
                        listStyle: "none",
                        margin: 0,
                        padding: "8px 0",
                        minWidth: "120px",
                        zIndex: 1
                    }}>
                        <li style={{ padding: "8px 16px", cursor: "pointer" }}>Publish All Modules</li>
                        <li style={{ padding: "8px 16px", cursor: "pointer" }}>Unpublish All Modules</li>
                    </ul>
                )}
            </div>
            <button style={{ marginLeft: 8 }}>+ Module</button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">HTML Basics</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn about HTML structure</li>
                                <li className="wd-content-item">Create your first HTML page</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 3</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">CSS Basics</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn about CSS selectors</li>
                                <li className="wd-content-item">Style your HTML page</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
