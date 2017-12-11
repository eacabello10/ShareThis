import React, { Component } from "react";
import PropTypes from "prop-types";

class Perfil extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="perfil">Hola</div>);
    }
}

Perfil.propTypes = {
    user : PropTypes.object.isRequired
};

export default Perfil;
