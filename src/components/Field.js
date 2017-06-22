import React from 'react'

export default class Field extends React.Component{

    shouldComponentUpdate(){
        return false;
    }

    render(){
        return (
            <div>
            {
                this.props.field.map((row, i) => (
                    <div key={i} style={{ height : '18px' }}>
                    {
                        row.map((column, j) => (
                            <span key={j} style={{ display : 'inline-block', width : '18px', height : '18px', background : '#000' }}></span>
                        ))
                    }
                    </div>
                ))
            }
            </div>
        )
    }
}
