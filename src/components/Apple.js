import React from 'react'

export default ({position}) => (
    <span style={{ position : 'absolute', top : position[0]*18+1+'px', left : position[1]*18+1+'px', width : '16px', height : '16px', background : 'red' }}></span>
)
