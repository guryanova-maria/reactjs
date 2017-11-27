import React, { Component } from 'react';

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // list: [
                // {id: 'item_01', name: 'Homework 1', nodes: [], parentId: null},
                // {id: 'item_02', name: 'Homework 2', nodes: [], parentId: null},
                // {id: 'item_03', name: 'Homework 3', nodes: [], parentId: null},
                // {id: 'item_04', name: 'Homework 4', nodes: [], parentId: null},
                // {id: 'item_05', name: 'Homework 5', nodes: [], parentId: null}
            // ]
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

    // todo:
    // remove children;
    // remove root elements
    // id: 'item_01' etc.
    // fullList: [{...}, {...}, ...]
    deleteItem(item, fullList, deleteParentNode = false) {
        let newState = fullList.slice();
        let parentItem = getItemById(item.parentId, fullList);

        // delete the item itself
        newState.splice(fullList.indexOf(item), 1);

        // delete item's children (nodes) from fullList
        let itemNodesCount = item.nodes.length;
        for (let i=0; i<itemNodesCount; i++) {
            let id = item.nodes[i];
            let node = getItemById(id, fullList);
            newState = this.deleteItem(node, newState);

        }

        // delete item from parent's children (nodes)
        if (deleteParentNode) {
            if (!!parentItem) {
                let parentItemId = newState.indexOf(parentItem);
                parentItem.nodes.splice(parentItem.nodes.indexOf(item.id), 1);
                newState[parentItemId].nodes = parentItem.nodes;
            }
            this.setState({
                list: newState
            });
        } else {
            return newState;
        }

    }

    render() {
        const list = this.state.list;

        if(list.length > 0) {
            return (
                <div>
                    <List list={list} fullList={list} parentId={null} deleteItem={this.deleteItem} />
                </div>
            );
        } else {
            return (
                <div>
                    <p>No tasks</p>
                </div>
            );
        }
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
            <button onClick={ () => {deleteItem(item, fullList, true)}}>x</button>
            {!!nodesList.length &&
            <List list={nodesList} fullList={fullList} parentId={item.id} deleteItem={deleteItem}/>
            }
        </li>
    )
};

export default Categories;