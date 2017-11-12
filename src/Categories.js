import React, { Component } from 'react';

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 'item_01', name: 'Homework 1', nodes: [], parentId: null},
                {id: 'item_02', name: 'Homework 2', nodes: ['item_03', 'item_04'], parentId: null},
                {id: 'item_03', name: 'Homework 2-1', nodes: ['item_04'], parentId: 'item_02'},
                {id: 'item_04', name: 'Homework 2-2', nodes: [], parentId: 'item_02'},
                {id: 'item_05', name: 'Homework 2-1-2', nodes: [], parentId: 'item_03'}
            ],
            itemsRendered: []
        };
    }

    render() {
        const list = this.state.list;

        return (
            <div>
                <List list={list} fullList={list}/>
            </div>
        );
    }
}

const List = ({list, fullList}) => {
    return(
        <ol>
            {
                list.map(item =>
                    <ListItem item={item} fullList={fullList}/>
                )
            }
        </ol>
    );
};

let getItemById = (id, fullList) => {
    for (let i = 0; i < fullList.length; i++) {
        if (fullList[i].id === id) {
            return fullList[i];
        }
    }
}

const ListItem = ({item, fullList}) => {
    let nodesList = item.nodes.map(node => getItemById(node, fullList));
    return (
        <li key={item.id}>
            {item.name}
            {!!nodesList.length &&
            <List list={nodesList} fullList={fullList}/>
            }
        </li>
    )
}

export default Categories;