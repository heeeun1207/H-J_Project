import { useEffect } from 'react';

function useAutoPlayVideo(videoRef, autoPlayDelay) {
  useEffect(() => {
    if (videoRef.current) {
      const timeout = setTimeout(() => {
        videoRef.current.play();
      }, autoPlayDelay * 5000); 

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [videoRef, autoPlayDelay]);
}

export default useAutoPlayVideo;
