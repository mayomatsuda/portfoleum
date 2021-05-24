const Square = ({ x, y, mouseEnterHandler, mouseLeaveHandler }) => {
    return (
        <div className='square'
            onMouseEnter={() => mouseEnterHandler(x, y)}
            onMouseLeave={() => mouseLeaveHandler(x, y)}
        >
        </div>
    )
}

export default Square
