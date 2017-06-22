import React from 'react'

export default ({position, deathPosition}) => (
    <div className="snake-wrap">
        {
            position.map((p, i) => {
                let style = {
                    top : p[0]*18+1+'px',
                    left : p[1]*18+1+'px'
                }
                if(JSON.stringify(p) == JSON.stringify(deathPosition[0]) && JSON.stringify(p) == JSON.stringify(deathPosition[1]))
                    style.background = 'red'

                return (
                    <span key={i} className="snake-cell" style={style}></span>
                )
            })
        }
    </div>
)
