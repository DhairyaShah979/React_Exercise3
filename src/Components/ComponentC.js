import React, { Component } from 'react'
import ComponentD from './ComponentD'
import { UserConsumer } from './userContext'
// import ComponentB from './ComponentB'

 class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username)=>
                    {
                        return <div>
                            Hello {username}
                            <ComponentD />
                        </div>

                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC
