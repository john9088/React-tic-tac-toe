import React from 'react'
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'

const Icon = ({name}) =>{
    switch (name) {
        case 'cross':
            return(<FaTimes className="icon"/>)
        case 'circle':
            return(<FaRegCircle className="icon"/>)
        default:
            return(<FaPen className="icon"/>)
    }
}

export default Icon