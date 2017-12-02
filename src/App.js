import React, {Component} from 'react';
import Sidebar from './Sidebar'
import Contents from './Contents'
import './App.css';
import './Sidebar.css';
import './Contents.css'


class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>TO-DO List</h2>
                </div>
                <Sidebar/>
                <Contents/>
            </div>
        );
    }
}

export default App;
