export const Square = ({children, isSelected, updateBoard, index}) => {
  const classNameSelected = isSelected ? 'is-selected': ''

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={`square ${classNameSelected}`}>
      {children}
    </div>
  )
}