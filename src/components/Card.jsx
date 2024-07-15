import star from '../assets/star.png'

function Card(props) {
    return(
        <div className="card">
            <img src={`/src/assets/${props.img}`} className="card--image" alt={props.alt} />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}

export default Card