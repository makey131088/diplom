import React from "react";
import { Link, Links } from "react-router-dom";


function CategoryCard({title, text, className, to= '/catalog'}) {
    return (
        <Link to= {to} className={`preview-card ${className}`}>
            <div className="preview-content">
                <h3 className="preview-title">{title}</h3>
                <p className="preview-text">{text}</p>
            </div>
        </Link>
    );
}

export default CategoryCard;