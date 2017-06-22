import React from 'react'

export default () => {
    return (
        <style>{`
            #wrap{
                width: 900px;
                height: 600px;
                margin: auto;
                position: relative
            }
            .field{
                position: absolute;
            }
            .field-cell{
                 display: inline-block;
                 width: 18px;
                 height: 18px;
                 background: #000
            }
            .apple{
                 position: absolute;
                 width: 16px;
                 height: 16px;
                 background: #00e500
            }
            .snake-wrap{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0
            }
            .snake-cell{
                position: absolute;
                width: 16px;
                height: 16px;
                background: yellow;
                zIndex: 2
            }
            .score{
                position: absolute;
                width: 340px;
                height: 540px;
                left: 560px;
                background: #eee;
                color: #000;
                padding: 20px;
                box-sizing: border-box
            }
            .score h1{
                margin: 0;
                font-family: Arial
            }
            .restart-btn{
                position: absolute;
                bottom: 30px;
                background: #00e500;
                border: 0;
                padding: 10px 20px;
                font-weight: 700;
                font-size: 24px;
                cursor: pointer;
            }
        `}</style>
    )
}
