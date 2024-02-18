import { Draggable } from "react-drag-reorder";

const PlayList = ({ list, videosList, setCurrentVideo, currentVideo }) => {
  return (
    <div
      className="flex flex-col overflow-scroll h-full w-1/5"
      id="play-list"
      ref={list}
    >
      <Draggable>
        {videosList.map((video) => (
          <span
            key={video.sources[0]}
            className={`flex flex-row m-1 shadow shadow-slate-400 rounded-lg items-center`}
            id={video.sources[0]}
            onClick={() => setCurrentVideo(video)}
          >
            <img
              src={video.thumb}
              className="w-2/5 rounded-lg"
              alt={video.title}
            />
            <p className="text-l font-medium w-full ml-1">{video.title}</p>
          </span>
        ))}
      </Draggable>
    </div>
  );
};

export default PlayList;
