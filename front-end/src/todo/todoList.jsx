import React from 'react'
import Button from '../template/Button'

export default props => {
    const renderRows = () => {
        const list = props.list || []
    
        return list.map(p => (
            <tr key={p._id}>
                <td className={p.done ? 'marked-done' : ''}>{p.description}</td>
                <td>
                    <Button style='success' icon='check' onClick={()=> props.handleMarkAsDone(p)} hide={p.done}></Button>
                    <Button style='warning' icon='undo' onClick={()=> props.handleMarkAsPending(p)} hide={!p.done}></Button>
                    <Button style='danger' icon='trash-o' onClick={()=> props.handleRemove(p)}></Button>
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
