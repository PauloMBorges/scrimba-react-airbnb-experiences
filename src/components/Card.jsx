import star from '../assets/star.png'

function Card(props) {
    return(
        <div className="card">
            <img src={`/src/assets/${props.img}`} className="card--image" alt={props.alt} />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}

export default Card
