import './index.css';

const Card = ({show}) => {
    return ( 
        <div className="wrapper">
            <div className="imageWrapper">
                <img className="image" src={show["image_url"]} alt={`${show["title"]}_image`}/>
            </div>
            <div className="titleWrapper">
                { `${show["title"].slice(0, 15)}...` }
            </div>
        </div>
    );
}
 
export default Card;