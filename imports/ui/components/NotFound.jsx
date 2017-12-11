import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Esta pagina no existe o no tienes permiso para verla</h1>
        );
    }
}

NotFound.propTypes = {

};

export default NotFound;
