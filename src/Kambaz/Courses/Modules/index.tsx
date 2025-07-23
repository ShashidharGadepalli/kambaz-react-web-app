import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { ListGroup } from "react-bootstrap";
import ModuleControlButtons from "./ModuleControlButtons";
import GreenCheckmark from "./GreenCheckMark";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules: { [key: string]: any[] } = db.modules as any;
  const courseModules = modules[cid as string] || [];
  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">
        {courseModules.map((module: any, i: number) => (
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray" key={i}>
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> <GreenCheckmark /> {module.title} <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any, j: number) => (
                  <ListGroup.Item className="wd-lesson p-3 ps-1" key={j}>
                    <BsGripVertical className="me-2 fs-3" /> <GreenCheckmark /> {lesson} <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
