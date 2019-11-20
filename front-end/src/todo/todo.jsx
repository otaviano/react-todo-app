import React, { Component } from 'react'
import Axios from 'axios'

import Form from './todoForm'
import List from './todoList'
import PageHeader from '../template/pageHeader'

const URL = 'http://localhost:5050/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { description: '', list:[] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <Form 
                    description={ this.state.description }
                    handleAdd={ this.handleAdd } 
                    handleSearch ={ this.handleSearch }
                    handleChange={ this.handleChange }
                    handleClear={this.handleClear} />
                <List 
                    list={ this.state.list }
                    handleRemove={this.handleRemove}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleMarkAsDone={this.handleMarkAsDone} />
            </div>)
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''

        Axios.get(`${URL}?sort=-createAt${search}`)
            .then(p => this.setState({ ...this.state, description, list: p.data } ))
    }

    handleClear() {
        this.refresh()
    }
    
    handleAdd() {
        const description = this.state.description

        Axios.post(URL, { description })
            .then(p => this.refresh())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`)
            .then(p => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(p => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(p => this.refresh(this.state.description))
    }
}