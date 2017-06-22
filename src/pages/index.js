import React from 'react'
import Field from '../components/Field'
import Snake from '../components/Snake'
import Apple from '../components/Apple'
import { initialState, initField, size, resize } from '../config'

const newApple = (snake) => {
    let apple = [Math.floor((Math.random() * size)), Math.floor((Math.random() * size))]
    let inSnake = false
    snake.forEach(position => {
        if(JSON.stringify(apple) === JSON.stringify(position)){
            inSnake = true
        }
    })
    if(!inSnake)
        return apple
    else
        return newApple(snake)
}

const resizeSnake = (snake) => {
    let newSnake = snake

    for(let i = 0; i < resize; i++){
        newSnake.push(snake[snake.length-1])
    }

    return newSnake
}

class App extends React.Component {

    constructor(){
        super()

        this.state = initialState

        this.arrowKeys = [37, 38, 39, 40]

        this.moves = {
            ArrowLeft  : { x : -1,  y :  0 },
            ArrowUp    : { x :  0,  y : -1 },
            ArrowRight : { x :  1,  y :  0 },
            ArrowDown  : { x :  0,  y :  1 },
        }

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleMove = this.handleMove.bind(this)
        this.move = this.move.bind(this)
        this.isDead = this.isDead.bind(this)

        setInterval(this.move, 75)

    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    handleKeyPress(evt){
        if(this.arrowKeys.indexOf(evt.keyCode) > -1){
            this.handleMove(evt.keyCode, evt.key)
        }
    }

    handleMove(keyCode, key){
        if(Math.abs(keyCode-this.state.directionCode) !== 2 && keyCode !== this.state.directionCode && !this.state.snakeIsChangingDirection){
            this.setState({
                direction : key,
                directionCode : keyCode,
                snakeIsChangingDirection : true
            })
        }
    }

    move(){
        if(this.state.directionCode > 0){
            let pos = this.state.snakePosition.map((position, i) => {
                let x = 0
                let y = 0
                if(i > 0){
                    x = this.state.snakePosition[i-1][0]
                    y = this.state.snakePosition[i-1][1]
                }
                else{
                    x = (position[0]+this.moves[this.state.direction].y) % (size)
                    y = (position[1]+this.moves[this.state.direction].x) % (size)
                    if(x < 0)
                        x = size-1
                    if(y < 0)
                        y = size-1
                }
                return [x, y]
            })
            this.setState({
                snakePosition : pos,
                snakeIsChangingDirection : false
            }, () => {
                this.isDead()
            })
            if(JSON.stringify(this.state.snakePosition[0]) === JSON.stringify(this.state.applePosition)){
                this.setState({
                    applePosition : newApple(this.state.snakePosition),
                    snakeSize : this.snakeSize + resize,
                    snakePosition : resizeSnake(this.state.snakePosition)
                })
            }
        }
    }

    isDead(){
        this.state.snakePosition.forEach((position, i) => {
            if(i > 0){
                if(JSON.stringify(this.state.snakePosition[0]) === JSON.stringify(position)){
                    alert('YOU ARE DEAD')
                    this.setState(initialState)
                }
            }
        })
    }

    render(){
        return (
            <div style={{ width : '600px', height : '600px', margin : 'auto', position : 'relative' }}>
                <Field field={initField()} />
                <Snake position={this.state.snakePosition} size={this.state.snakeSize} />
                <Apple position={this.state.applePosition} />
            </div>
        )
    }

}

export default App
