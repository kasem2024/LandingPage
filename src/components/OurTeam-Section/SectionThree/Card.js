

const Card = (props) => {
  return (
    <div className="Card">
      <div className="image-card">
        <img src={props.image} alt=""/>
      </div>
      <div className="info-card none">
        <div className="info-person ">
          {props.name}
          <span>{props.track}</span>
        </div>
        <div className="link">
          <a href={props.gmail}> contact </a>
        </div>
      </div>
    </div>
  )
}

export default Card