import React, { Component } from 'react'
import Table from '../Table/Table'
import Jumbotron from './Jumbotron'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            course_modules: [

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
