import React from 'react'

export default ({position}) => (
    <span className="apple" style={{ top : position[0]*18+1+'px', left : position[1]*18+1+'px' }}></span>
)
