import React, {Component} from 'react';
import Categories from './Categories'

export class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="sidebar">
                <Categories />
            </div>
        );
    }
}

export default Sidebar;