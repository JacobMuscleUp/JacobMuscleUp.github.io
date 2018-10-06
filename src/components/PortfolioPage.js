import React from 'react';
import {
  Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Carousel, CarouselCaption,
  CarouselControl, CarouselIndicators, CarouselItem,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import './PortfolioPage.css'

import imgPortfolioFastFileExplorer from '../assets/img/portfolio/fast_file_explorer.png';

class PortfolioPage extends React.Component {
    render() {
        return (
            <div className="PortfolioPage">
                <Card>
                    <CardImg top width="100%" 
                        src="https://raw.githubusercontent.com/JacobMuscleUp/CCKIT_STL/master/Screenshots/Metaprogramming.png" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>My implementation of C++ Standard Template Library</CardTitle>
                        <CardSubtitle>Technologies used:</CardSubtitle>
                        <CardText>C++, Metaprogramming</CardText>
                        <a href="https://github.com/JacobMuscleUp/CCKIT_STL" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src="https://github.com/JacobMuscleUp/jacob-face-detection-frontend/blob/master/screenshots/face-detection-demo.png?raw=true" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>Face detection web app with account management</CardTitle>
                        <CardSubtitle>Technologies used:</CardSubtitle>
                        <CardText>
                            Node,REST,React,Express,Knex,node-postgres,Typescript,bcrypt,
                            Clarifai,Reactstrap,tachyons,Heroku,PostgreSQL,Postman
                        </CardText>
                        <a href="https://jacob-face-detection.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
                            <Button>Online Demo</Button>
                        </a>
                        <a href="https://github.com/JacobMuscleUp/jacob-face-detection-backend" rel="noopener noreferrer" target="_blank" >
                            <Button>Backend Source code</Button>
                        </a>
                        <a href="https://github.com/JacobMuscleUp/jacob-face-detection-frontend" rel="noopener noreferrer" target="_blank" >
                            <Button>Frontend Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src="https://github.com/JacobMuscleUp/jacob-chatroom/blob/master/screenshots/jacob-chatroom-demo.png?raw=true" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>Online chat app with history stored in database</CardTitle>
                        <CardSubtitle>Technologies used:</CardSubtitle>
                        <CardText>
                            Node,Express,Heroku,Socket.io.MongoDB
                        </CardText>
                        <a href="https://jacob-chatroom-app.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
                            <Button>Online Demo</Button>
                        </a>
                        <a href="https://github.com/JacobMuscleUp/jacob-chatroom" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src="https://raw.githubusercontent.com/JacobMuscleUp/RenderingEngineOpenGL/master/Screenshots/RenderingEngineDemo.gif" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>RenderingEngineOpenGL</CardTitle>
                        <CardSubtitle>Technologies used:</CardSubtitle>
                        <CardText>C++, OpenGL, GLSL, GLM</CardText>
                        <a href="https://github.com/JacobMuscleUp/RenderingEngineOpenGL" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src={imgPortfolioFastFileExplorer} 
                        alt="The image is currently unavailable" />
                    <CardBody className="CardBody">
                        <CardTitle>Android App: File Explorer</CardTitle>
                        <CardSubtitle>Technologies used:</CardSubtitle>
                        <CardText>Java, Android SDK</CardText>
                        <a href="https://play.google.com/store/apps/details?id=com.cckit.jacobchan.fastfileexplorer.release" rel="noopener noreferrer" target="_blank" >
                            <Button>Google Play</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src="https://raw.githubusercontent.com/JacobMuscleUp/DocumentationGenerator/master/Screenshots/DocGen0.PNG" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>Documentation Generator</CardTitle>
                        <CardSubtitle>Technologies used:</CardSubtitle>
                        <CardText>Javascript, Node, gulp.js, Batch, HTML5, CSS3</CardText>
                        <a href="https://github.com/JacobMuscleUp/DocumentationGenerator" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
				<Card>
                    <CardImg top width="100%" 
                        src="https://raw.githubusercontent.com/JacobMuscleUp/ProcGenAI/master/Screenshots/ProcGenAIDemo.gif" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>AI&ProcGen</CardTitle>
                        <CardSubtitle>Technologies used:</CardSubtitle>
                        <CardText>C#, Unity, Behavior Tree, Pathfinding, Procedural Generation</CardText>
                        <a href="https://github.com/JacobMuscleUp/ProcGenAI" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default PortfolioPage;