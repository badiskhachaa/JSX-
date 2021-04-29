
import ReactPlayer from 'react-player/youtube'
import music from './videos/badis2.mp4';

const video = () => {
    const videoSrc = music;
    return(
        <div className='video1'>
            <h1>My video</h1>
            <ReactPlayer 
            src={"https://www.youtube.com/watch?v=Rq5SEhs9lws"}
            width="720"
            height="450"
            />
        </div>
    );
}; 
export default video;