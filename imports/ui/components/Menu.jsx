import React, {Component} from "react";
import PropTypes from "prop-types";

class Menu extends Component {
    constructor(props){
        super(props);
    }
//La aplicación cuenta con descripciones. Se puede mejorar el diseño y agregar tácticas de accesibilidad.
    render(){
        return (
            <div  className="menu col-md-2">
                <p>Bienvenido {this.props.info.anon}</p>
                    {this.props.info.chatrooms.length ?
                        <div> 
                            <p>Estos son sus chats</p>
                            <ul>
                                {this.props.info.chatrooms.map((chat, i) => {
                                    return (<li key={i}><button className="btn" onClick={() => this.props.change(chat)}>
                                {chat.keywords[0]}</button></li>)
                                })}
                            </ul>
                        </div>
                    : <p>Aun no participa en algun chat, lo invitamos a postear algo</p>
                }
            </div>
        )
    }
}

Menu.propTypes = {
};

export default Menu;
