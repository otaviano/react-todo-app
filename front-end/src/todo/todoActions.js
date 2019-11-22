import Axios from 'axios'

const URL = 'http://localhost:5050/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const query = description ? `&description__regex=/${description}/` : ''

        var request = Axios.get(`${URL}?sort=-createAt${query}`)
            .then(p => dispatch({ type: 'TODO_SEARCHED', payload: p.data }))
    }


    return 
}

export const add = (description) => {
    return dispatch => {
        Axios.post(URL, { description })
            .then(p => dispatch(clear()))
            .then(p => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(p => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(p => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        Axios.delete(`${URL}/${todo._id}`)
            .then(p => dispatch(search()))
    }
}

export const clear = () => {
    return [
        { type: 'TODO_CLEAR'},
        search('')
    ]
}