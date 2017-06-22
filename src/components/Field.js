import React from 'react'

export default class Field extends React.Component{

    shouldComponentUpdate(){
        return false;
    }

    render(){
        return (
            <div className="field">
            {
                this.props.field.map((row, i) => (
                    <div key={i} style={{ height : '18px' }}>
                    {
                        row.map((column, j) => (
                            <span key={j} className="field-cell"></span>
                        ))
                    }
                    </div>
                ))
            }
            </div>
        )
    }
}
