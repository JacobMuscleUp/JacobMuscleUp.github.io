import React from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import "./SkillPage.css";

import imgSkillHtml5 from "../assets/img/skill/html5.jpg";
import imgSkillCss3 from "../assets/img/skill/css3.jpg";
import imgSkillOpengl from "../assets/img/skill/opengl.jpg";
import imgSkillGlm from "../assets/img/skill/glm.png";
import imgSkillGlsl from "../assets/img/skill/glsl.png";
import imgSkillReactjs from "../assets/img/skill/reactjs.png";
import imgSkillReactrouter from "../assets/img/skill/reactrouter.png";
import imgSkillCplusplus from "../assets/img/skill/cplusplus.png";
import imgSkillCsharp from "../assets/img/skill/csharp.png";
import imgSkillDotnet from "../assets/img/skill/dotnet.png";
import imgSkillPhp from "../assets/img/skill/php.png";
import imgSkillUnity from "../assets/img/skill/unity.png";
import imgSkillMysql from "../assets/img/skill/mysql.jpg";
import imgSkillGit from "../assets/img/skill/git.png";
import imgSkillJava from "../assets/img/skill/java.png";
import imgSkillAndroid from "../assets/img/skill/android.jpg";
import imgSkillNodejs from "../assets/img/skill/nodejs.jpg";
import imgSkillJavascript from "../assets/img/skill/javascript.png";
import imgSkillJquery from "../assets/img/skill/jquery.jpg";
import imgSkillAngularjs from "../assets/img/skill/angularjs.png";
import imgSkillGulpjs from "../assets/img/skill/gulpjs.jpg";
import imgSkillPython from "../assets/img/skill/python.png";
import imgSkillBatch from "../assets/img/skill/batch.png";
import imgSkillBootstrap from "../assets/img/skill/bootstrap.jpg";
import imgSkillIntel from "../assets/img/skill/intel.png";
import imgSkillVirtualbox from "../assets/img/skill/virtualbox.png";
import imgSkillWindows from "../assets/img/skill/windows.png";
import imgSkillLinux from "../assets/img/skill/linux.jpg";
import imgSkillLibvlc from "../assets/img/skill/libvlc.png";

class SkillPage extends React.Component {
    render() {
        return (
            <div className="SkillPage">
                <Card>
                    <CardBody>
                        <CardTitle>Technologies Jacob used</CardTitle>
                        <Container>
                            <Row>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillHtml5}
                                        alt="html5" />
                                    <p>HTML5</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillCss3}
                                        alt="css3" />
                                    <p>CSS3</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillOpengl}
                                        alt="opengl" />
                                    <p>OpenGL</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillGlm}
                                        alt="glm" />
                                    <p>GLM</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillGlsl}
                                        alt="glsl" />
                                    <p>GLSL</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillReactjs}
                                        alt="reactjs" />
                                    <p>React</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillReactrouter}
                                        alt="reactrouter" />
                                    <p>React Router</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillCplusplus}
                                        alt="cplusplus" />
                                    <p>C++</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillCsharp}
                                        alt="csharp" />
                                    <p>C#</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillDotnet}
                                        alt="dotnet" />
                                    <p>.Net</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillPhp}
                                        alt="php" />
                                    <p>PHP</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillUnity}
                                        alt="unity" />
                                    <p>Unity</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillMysql}
                                        alt="mysql" />
                                    <p>MySQL</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillGit}
                                        alt="git" />
                                    <p>Git</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillJava}
                                        alt="java" />
                                    <p>Java</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillAndroid}
                                        alt="android" />
                                    <p>Android</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillNodejs}
                                        alt="nodejs" />
                                    <p>Node</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillJavascript}
                                        alt="javascript" />
                                    <p>Javascript</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillJquery}
                                        alt="jquery" />
                                    <p>JQuery</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillAngularjs}
                                        alt="angularjs" />
                                    <p>AngularJS</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillGulpjs}
                                        alt="gulpjs" />
                                    <p>gulp.js</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillPython}
                                        alt="python" />
                                    <p>Python</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillBatch}
                                        alt="batch" />
                                    <p>Batch</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillBootstrap}
                                        alt="bootstrap" />
                                    <p>Bootstrap</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillIntel}
                                        alt="intel" />
                                    <p>Intel x86 Assembly</p>
                                </Col>

                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillWindows}
                                        alt="windows" />
                                    <p>Windows</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillLinux}
                                        alt="linux" />
                                    <p>Linux</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillVirtualbox}
                                        alt="virtualbox" />
                                    <p>Oracle VM VirtualBox</p>
                                </Col>
                                <Col className="Skill">
                                    <img
                                        className="Skill-icon"
                                        src={imgSkillLibvlc}
                                        alt="libvlc" />
                                    <p>VideoLAN libVLC</p>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default SkillPage;