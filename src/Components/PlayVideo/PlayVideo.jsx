import React from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best YTB channel to learn Web Development</h3>
        <div className="play-video-info">
            <p>15525 views &bull; 2 days ago</p>
            <div>
                <span>
                    <img src={like} alt="" />125
                </span>

                <span>
                    <img src={dislike} alt="" />1
                </span>

                <span>
                    <img src={share} alt="" />Share
                </span>

                <span>
                    <img src={save} alt="" />Save
                </span>
            </div>
        </div>

        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Kaushik Jain</p>
                <span>1M Subscribers</span>
            </div>

            <button >Subscribe</button>
        </div>

        {/* description section */}
        <div className="video-desc">
            <p>Channel that makes learning easy</p>
            <p>Subscribe Kaushik Jain</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>
                        Jack Nick <span>1 day ago</span>
                    </h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum maxime pariatur omnis aperiam eligendi illo sequi error, vitae exercitationem modi magnam rem alias ut, minima dolorum dolorem inventore? Deserunt, assumenda optio consequatur fugiat doloremque dignissimos laborum! Reprehenderit, rem debitis consequatur atque quibusdam dignissimos, beatae aperiam ullam esse sequi iste possimus?
                    </p>
                    <div className='comment-action'>
                        <img src={like} alt="" /><span>12</span>
                        <img src={dislike} alt="" /><span>1</span>
                    </div>
                </div>

                
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>
                        Jack Nick <span>1 day ago</span>
                    </h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum maxime pariatur omnis aperiam eligendi illo sequi error, vitae exercitationem modi magnam rem alias ut, minima dolorum dolorem inventore? Deserunt, assumenda optio consequatur fugiat doloremque dignissimos laborum! Reprehenderit, rem debitis consequatur atque quibusdam dignissimos, beatae aperiam ullam esse sequi iste possimus?
                    </p>
                    <div className='comment-action'>
                        <img src={like} alt="" /><span>12</span>
                        <img src={dislike} alt="" /><span>1</span>
                    </div>
                </div>

                
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>
                        Jack Nick <span>1 day ago</span>
                    </h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum maxime pariatur omnis aperiam eligendi illo sequi error, vitae exercitationem modi magnam rem alias ut, minima dolorum dolorem inventore? Deserunt, assumenda optio consequatur fugiat doloremque dignissimos laborum! Reprehenderit, rem debitis consequatur atque quibusdam dignissimos, beatae aperiam ullam esse sequi iste possimus?
                    </p>
                    <div className='comment-action'>
                        <img src={like} alt="" /><span>12</span>
                        <img src={dislike} alt="" /><span>1</span>
                    </div>
                </div>

                
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>
                        Jack Nick <span>1 day ago</span>
                    </h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum maxime pariatur omnis aperiam eligendi illo sequi error, vitae exercitationem modi magnam rem alias ut, minima dolorum dolorem inventore? Deserunt, assumenda optio consequatur fugiat doloremque dignissimos laborum! Reprehenderit, rem debitis consequatur atque quibusdam dignissimos, beatae aperiam ullam esse sequi iste possimus?
                    </p>
                    <div className='comment-action'>
                        <img src={like} alt="" /><span>12</span>
                        <img src={dislike} alt="" /><span>1</span>
                    </div>
                </div>

                
            </div>
        </div>

    </div>
  )
}

export default PlayVideo
