import React from 'react'
import newsImg from "../assets/images.png"

const NewsItem = ({title,desc,src,url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2 " style={{maxWidth:"345px"}}>
            <img src={src?src:newsImg} style={{Height:"200px",width:"325px"}} className="card-img-top" alt="card-image" />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{desc?desc.slice(0,90):""}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem