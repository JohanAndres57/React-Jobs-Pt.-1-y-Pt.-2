
const Card = ({children, bg='bg-green-100' }) => {
  return (
    <div className={`${bg} rounded-lg p-6 shadow-md`}>
      {children}
    </div>
  )
}

export default Card