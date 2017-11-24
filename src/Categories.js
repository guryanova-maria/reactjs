import React, { Component } from 'react';

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 'item_01', name: 'Homework 1', nodes: [], parentId: null},
                {id: 'item_02', name: 'Homework 2', nodes: ['item_03', 'item_04'], parentId: null},
                {id: 'item_03', name: 'Homework 2-1', nodes: ['item_05', 'item_06'], parentId: 'item_02'},
                {id: 'item_04', name: 'Homework 2-2', nodes: ['item_07'], parentId: 'item_02'},
                {id: 'item_05', name: 'Homework 2-1-1', nodes: [], parentId: 'item_03'},
                {id: 'item_06', name: 'Homework 2-1-2', nodes: [], parentId: 'item_03'},
                {id: 'item_07', name: 'Homework 2-2-1', nodes: [], parentId: 'item_04'}
            ]
        };

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        const newState = this.state.list.slice();
        newState.splice(id, 1);
        this.setState({
            list: newState
        });
    }

    render() {
        const list = this.state.list;

        return (
            <div>
                <List list={list} fullList={list} parentId={null} deleteItem={this.deleteItem} />
            </div>
        );
    }
}

const List = ({list, fullList, parentId = null, deleteItem}) => {
    return(
        <ol>
            {

                list.map(item =>
                    item.parentId === parentId
                        ? <ListItem item={item} fullList={fullList} deleteItem={deleteItem}/>
                        : null
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
};

const ListItem = ({item, fullList, deleteItem}) => {
    let nodesList = item.nodes.map(node => getItemById(node, fullList));
    return (
        <li key={item.id}>
            {item.name}
            <button onClick={ () => {deleteItem(item.id)}}>x</button>
            {!!nodesList.length &&
            <List list={nodesList} fullList={fullList} parentId={item.id} deleteItem={deleteItem}/>
            }
        </li>
    )
};

export default Categories;