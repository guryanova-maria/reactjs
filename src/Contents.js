import React, {Component} from 'react';

let findTasksByItemId = (id, list) => {
    let count = list.length;
    for (let i=0; i<count; i++) {
        if (list[i].id === id) {
            return list[i].tasks;
        }
    }
};

class Contents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'items': [
                {id: 'item_01', tasks: ['task_01', 'task_02']},
                {id: 'item_02', tasks: ['task_03', 'task_04']}
            ]
        };
        this.activeItemId = 'item_01';
    }
    render() {
        return (
            <div id={'contents'}>
                <table>
                    <thead>
                        <tr>
                            <td className={'is_done'}>Is done</td>
                            <td className={'task_name'}>Task name</td>
                            <td className={'actions'}></td>
                        </tr>
                    </thead>
                    <tbody>
                        <TaskList tasks={findTasksByItemId(this.activeItemId, this.state.items)} />
                    </tbody>
                </table>
            </div>
        );
    }
}

const TaskList = ({tasks}) => {
    return(
        !!tasks &&
        tasks.map(
            task => <Task key={task} task={task} />
        )
    )
};

const Task = ({task}) => {
    return(
        <tr>
            <td className={'is_done'}><input type={'checkbox'} checked={''} /></td>
            <td className={'task_name'}>{task}</td>
            <td className={'actions'}></td>
        </tr>
    )
};

export default Contents;