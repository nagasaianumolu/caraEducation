import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => { 
        if (e.target === player.current) {
            const videoEl = player.current.querySelector('video');
            if (videoEl) videoEl.pause();
            setPlayState(false);
        }
    }

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <iframe
                  src="https://drive.google.com/file/d/1HEO-VToMHNm6T9HM12Nkj92QtARz6721/preview"
                  allow="autoplay"
                  title="College Video"
></iframe>

        </div>
    );
};

export default VideoPlayer;
