import * as React from 'react'

const Info = ({location}: any) => {
    return (
        <div>{location.state.id}</div>
    )
}

export default Info