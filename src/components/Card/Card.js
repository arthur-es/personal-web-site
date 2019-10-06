import React from "react";

function Card({ title, link, subtitle, tags }) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>

                        <p className="subtitle is-6">
                            <a href={`https://${link}`} target="_blank">
                                {link}
                            </a>
                        </p>
                        <div className="tag">
                            {tags.map(tag => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
