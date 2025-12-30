
import './Video.css';
import { useState } from 'react';

export function Video(props) {
    const { title, channelName, img, clip } = props;
    const [likesCount, setLikesCount] = useState(0)


    const increaseLikesByOne = () => {
       setLikesCount(likesCount + 1)
       console.log(title, likesCount)
     }

    return (
        <div className="video">
         
            <img className="video-img" src={img} alt="video image" />
            <p>{title}</p>
            <p>{channelName}</p>
            <video src={clip} className='clip' controls></video>
            <div className="video-footer">
                <p>Лайки: {likesCount}</p>
                <button onClick={increaseLikesByOne}>Лайк</button>
            </div> 
        </div>
    );
}


