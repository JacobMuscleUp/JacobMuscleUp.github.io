import React from 'react';
import {
    Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle
} from 'reactstrap';

import imgError404 from '../assets/img/error/404.png';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="PortfolioPage">
                <Card>
                    <CardImg top width="100%" 
                        src={imgError404}
                        alt="The image is currently unavailable because Github is down" />
                </Card>
            </div>
        );
    }
}

export default ErrorPage;