import React, { Component } from 'react'
import Item from './Item'

class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div className='py-5'>
                <div className='container'>
                    <div className="text-center">
                        <h2 className='py-2'>React for rails developers - videos</h2>
                        <Item />
                    </div>
                </div>
            </div>
        )
    }
}

export default Table
