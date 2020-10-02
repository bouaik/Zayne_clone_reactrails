import React, { Component } from 'react'
import Table from '../Table/Table'
import Jumbotron from './Jumbotron'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            course_modules: [
                { id: 1, title: '1. Setup up new ruby on rails project', description: 'Lorem ipusm', active: false },
                { id: 2, title: '2. Scaffold first medels', description: 'Lorem ipusm', active: false },
                { id: 3, title: '3. Style views', description: 'Lorem ipusm', active: false },
                { id: 4, title: '4. Deploy to heroku', description: 'Lorem ipusm', active: false },
            ]
        }
    }


    render() {
        return (
            <div>
                <Jumbotron />
                <Table />
            </div>
        )
    }
}

export default Home
