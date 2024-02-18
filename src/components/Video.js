const Video = ({ videoRef, playNext, currentVideo }) => {
  console.log(currentVideo);
  return (
    <span className="flex flex-col p-4 h-full w-4/5 overflow-scroll">
      <video
        className="rounded-lg"
        controls
        autoPlay={true}
        onEnded={playNext}
        ref={videoRef}
      >
        <source src={currentVideo.sources[0]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <span className="mt-2">
        <h2 className="font-bold text-2xl">Title: {currentVideo.title}</h2>
        <p>Description: {currentVideo.description}</p>
      </span>
    </span>
  );
};

export default Video;
