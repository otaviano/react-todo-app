import React, { Component } from 'react'

import Form from './todoForm'
import List from './todoList'
import PageHeader from '../template/pageHeader'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <Form />
                <List />
            </div>)
    }
}