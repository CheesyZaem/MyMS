import React from 'react';
import { NavLink } from 'react-router-dom';
import Config from '../../../Config';

class Links extends React.Component {
    render() {
        return (
            <nav className="links">
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">{Config.server_name}</NavLink></li>
                    <li><NavLink activeClassName="active" to={{pathname: '/about'}}>About</NavLink></li>
                    <li><NavLink activeClassName="active" to={{pathname: '/news/1'}}>News</NavLink></li>
                    <li><NavLink activeClassName="active" to={{pathname: '/rankings'}}>Rankings</NavLink></li>
                    <li><NavLink activeClassName="active" to={{pathname: '/downloads'}}>Downloads</NavLink></li>
                    <li><a href={Config.forum_link}>Forum</a></li>
                    <li><NavLink activeClassName="active" to={{pathname: '/vote'}}>Vote</NavLink></li>
                    <li><NavLink activeClassName="active" to={{pathname: '/donate'}}>Donate</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Links;
