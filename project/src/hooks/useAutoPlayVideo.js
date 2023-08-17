import { useEffect } from 'react';

function useAutoPlayVideo(videoRef) {
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplay', () => {
        videoRef.current.play();
      });
    }
  }, [videoRef]);
}

export default useAutoPlayVideo;
