import React from 'react'

export default function SortLabel(props) {
    const { sortBy, sortOrder, field } = props;
    let indicator = <>&#8645;</>
    if (sortBy === field && sortOrder === 'asc') {
        indicator = <>&uarr;</>
    } else if (sortBy === field && sortOrder === 'desc') {
        indicator = <>&darr;</>
    }
    return (
        <><span className="capitalize">{field} <span>{indicator}</span></span></>
    )
}
