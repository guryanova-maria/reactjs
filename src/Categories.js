import React, { Component } from 'react';

class Categories extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     item_01: {id: 'item_01', name: 'Homework 1', nodes: [], parent: ''},
        //     item_02: {id: 'item_02', name: 'Homework 2', nodes: ['item-03'], parent: ''},
        //     item_03: {id: 'item_03', name: 'Homework 2-1', nodes: [], parent: 'item-02'}
        // };
        this.state = {
            list: [
                    'Homework 1',
                    'Homework 2',
                    'Homework 3',
                    'Homework 4',
            ]
        };
    }

    render() {
        const {list} = this.state;

        return (
            <div>
                <List list={list}/>
            </div>
        );
    }
}

const List = ({list}) => (
    <ol>
        {
            list.map((item, index) => (
                <li key = {index} >
                    { item }
                </li>
            ))
        }
    </ol>
)

export default Categories;