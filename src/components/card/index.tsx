import React from 'react';
import { ICard } from '../../common/models';
import './card.css';

const Card: React.FC<ICard> = (props) => {

    const {
        author,
        date_taken,
        link,
        media,
        tags,
        title
    } = props;

    const allowedMaxChars = 23;
    const authorEmail = author.length > 0 ? author.split(' ')[0] : "Not found";
    var authorUserId = author.length > 0 ? author.split(' ')[1] : "Not found";
    authorUserId = authorUserId !== "Not found" ?
        author.substring(author.indexOf("\"") + 1, author.lastIndexOf("\"")) : "Not found";
    const truncatedTags = tags.length > 0 ? tags.length > allowedMaxChars ? tags.substring(0, allowedMaxChars) + "..." : tags : "No tags available";
    const truncatedTitle = title.trim().length > 0 ? title.length > allowedMaxChars ? title.substring(0, allowedMaxChars) + "..." : title : "Untitled";

    return (
        <div id="card" className="card-container" onClick={() => window.open(link, "_blank")}>
            <div className="title-div">
                <span id="title" className="title">
                    {truncatedTitle}
                </span>
                {
                    title.trim().length > allowedMaxChars ? (
                        <div id="hover-text-assist" className="hover-text-assist">
                            <span>
                                {title}
                            </span>
                        </div>
                    ) : ""
                }
            </div>
            <div className="thumbnail-container">
                <img className="thumbnail" src={media.m ? media.m : ""} alt="Thumbnail" />
            </div>
            <div className="info-div">
                <span className="info-heading">
                    Author
                </span>
                <span>
                    {authorUserId}
                </span>
            </div>
            <div className="info-div">
                <span className="info-heading">
                    Author Email
                </span>
                <span>
                    {authorEmail}
                </span>
            </div>
            <div className="info-div">
                <span className="info-heading">
                    Date taken
                </span>
                <span>
                    {date_taken ?
                        new Date(date_taken).toLocaleDateString() + ' at ' + new Date(date_taken).toLocaleTimeString() :
                        "No date available"}
                </span>
            </div>
            <div className="info-div">
                <span className="info-heading">
                    Tags
                </span>
                <span id="tags" className="tags">
                    {truncatedTags}
                </span>
                {
                    tags.length > allowedMaxChars ? (
                        <div id="hover-text-assist" className="hover-text-assist">
                            <span>
                                {tags}
                            </span>
                        </div>
                    ) : ""
                }
            </div>
        </div>
    )
}

export default Card;