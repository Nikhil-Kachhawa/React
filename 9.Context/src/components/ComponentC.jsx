    import React from 'react'
    import { Data, Data1 } from '../App'

    const ComponentC = () => {
    return (
        <div>
            <h1>ComponentC</h1>
            <Data.Consumer>
                {
                    (name) => {
                        return (
                            // <h2> 
                            //     Name : {name} which is passed from Create Context App
                            // </h2>
                            <Data1.Consumer>
                                {(age) => {
                                    return (
                                        <h2> 
                                            Name : {name} which is passed from Create Context App and Age : {age} 
                                        </h2>)
                                }}
                            </Data1.Consumer>
                        )
                    }    
                }
            </Data.Consumer>
        </div>
    )
    }

    export default ComponentC