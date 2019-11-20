import React from 'react'
import Grid from '../template/grid'
import Button from '../template/button'

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter')
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        else if(e.key === 'Escape')
            props.handleClear()
    }
    
    return (<div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input 
                id="description" 
                className="form-control" 
                placeholder="Adicione uma tarefa"
                onChange={props.handleChange} 
                onKeyUp={keyHandler}
                value={props.description}></input>
        </Grid>
        <Grid cols="12 3 2">
            <Button style="primary" onClick={props.handleAdd} icon="plus"></Button>
            <Button style="info" onClick={props.handleSearch} icon="search"></Button>
            <Button style="default" onClick={props.handleClear} icon="close"></Button>
        </Grid>
    </div>)
}