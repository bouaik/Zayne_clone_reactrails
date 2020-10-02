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
    handleVideoChange(item, e) {
        e.preventDefault()

        let course_modules = [...this.state.course_modules]

        course_modules.map(data => {
            data.active = false
        })

        item.active = !item.active

        course_modules[item.id - 1] = item

        this.setState({ course_modules })
    }


    render() {
        return (
            <div>
                <Jumbotron />
                <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules} />
            </div>
        )
    }
}

export default Home
