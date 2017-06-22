export const size = 30
export const resize = 3

export const initialState = {
    direction : '',
    directionCode : 0,
    snakeIsChangingDirection : false,
    snakePosition : [[0, 1], [0, 0]],
    applePosition : [10, 10],
    snakeSize : 2,
    isDead: false,
    deathPosition: [[-1, -1], [-1, -1]]
}

export const initField = () => {
    let field = []

    for (let i = 0; i < size; i++) {
        let temp = []
        for (let j = 0; j < size; j++) {
            temp.push(0);
        }
        field.push(temp)
    }

    return field
}
