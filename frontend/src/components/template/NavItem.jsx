import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default (props) => {
    return(
        <a className={`${props.pageClass}`} href={`${props.pageLink}`}>{props.pageLabel}</a>
    )

}