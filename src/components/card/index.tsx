import React from 'react';
import { ICard } from '../../common/models';
import './card.css';

const Card: React.FC<ICard> = (props) => {

    const {
        author,
        author_id,
        date_taken,
        description,
        link,
        media,
        published,
        tags,
        title
    } = props;

    return (
        <div id="card" className="card-container" onClick={()=> window.open(link, "_blank")}>
            <div className="thumbnail-container">
                <img className="thumbnail" src={media.m ? media.m : ""} alt="Thumbnail Image"/>
            </div>
            <div>
                <span>
                    Author Name: {author ? author : "Author name not found"}
                </span>
            </div>
            <div>
                <span>
                    Date taken: {date_taken ? date_taken : "No date available"}
                </span>
            </div>
            <div>
                <span>
                    Tags: {tags}
                </span>
            </div>
            {/* <div>
                <a href={link} target="_blank">Click here</a> to view full size image.
            </div> */}
        </div>
    )
}

export default Card;