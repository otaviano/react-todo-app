import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '../template/Button'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
    
        return list.map(p => (
            <tr key={p._id}>
                <td className={p.done ? 'marked-done' : ''}>{p.description}</td>
                <td>
                    <Button style='success' icon='check' onClick={()=> props.markAsDone(p)} hide={p.done}></Button>
                    <Button style='warning' icon='undo' onClick={()=> props.markAsPending(p)} hide={!p.done}></Button>
                    <Button style='danger' icon='trash-o' onClick={()=> props.remove(p)}></Button>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="table-actions">Ações</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch )

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)