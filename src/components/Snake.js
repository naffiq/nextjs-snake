import React from 'react'

export default ({position}) => {
    return (
        <div style={{ width : '100%', height : '100%', position : 'absolute', left : 0, top : 0 }}>
            {
                position.map((p, i) => (
                    <span key={i} style={{ position : 'absolute', top : p[0]*18+1+'px', left : p[1]*18+1+'px', width : '16px', height : '16px', background : 'yellow', zIndex : 2 }}></span>
                ))
            }
        </div>
    )
}
