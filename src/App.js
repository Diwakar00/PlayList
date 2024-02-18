import { videosList } from "./utils.js/videos";
import { useEffect, useRef, useState } from "react";
import Video from "./components/Video";
import PlayList from "./components/PlayList";

function App() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const list = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (currentVideo?.sources[0]) {
      videoRef.current.setAttribute("src", currentVideo.sources[0]);
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideo]);

  const playNext = () => {
    const reOrderedList = [];
    list.current.childNodes.forEach((child) => {
      reOrderedList.push(child.childNodes[0].id);
    });

    const index = reOrderedList.findIndex(
      (video) => video === currentVideo.sources[0]
    );
    const nextVideoUrl = reOrderedList[(index + 1) % reOrderedList.length];
    const nextVideo = videosList.find(
      (vedio) => vedio.sources[0] === nextVideoUrl
    );
    setCurrentVideo(nextVideo);
  };

  return (
    <div className="flex flex-row justify-around items-center h-screen">
      {currentVideo ? (
        <Video
          videoRef={videoRef}
          playNext={playNext}
          currentVideo={currentVideo}
        />
      ) : (
        <p>Welcome, Select a video to play</p>
      )}
      <PlayList
        list={list}
        videosList={videosList}
        setCurrentVideo={setCurrentVideo}
        currentVideo={currentVideo}
      />
    </div>
  );
}

export default App;
