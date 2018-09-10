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
                    <CardBody>
                        <CardTitle>My implementation of C++ Standard Template Library</CardTitle>
                        <CardSubtitle>Technologies used:</CardSubtitle>
                        <CardText>C++</CardText>
                        <a href="https://github.com/JacobMuscleUp/CCKIT_STL" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src="https://raw.githubusercontent.com/JacobMuscleUp/RenderingEngineOpenGL/master/Screenshots/RenderingEngineDemo.gif" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody>
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
                    <CardBody>
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
                    <CardBody>
                        <CardTitle>Documentation Generator</CardTitle>
                        <CardSubtitle>Technologies used:</CardSubtitle>
                        <CardText>Javascript, Node, gulp.js, Batch, HTML5, CSS3</CardText>
                        <a href="https://github.com/JacobMuscleUp/DocumentationGenerator" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default PortfolioPage;