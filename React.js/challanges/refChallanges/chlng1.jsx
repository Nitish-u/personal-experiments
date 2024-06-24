// Challenge 1 of 4:
// Play and pause the video
// In this example, the button toggles a state variable to switch between a playing and a paused state. However, in order to actually play or pause the video, toggling state is not enough. You also need to call play() and pause() on the DOM element for the <video>. Add a ref to it, and make the button work.

// import { useState, useRef } from 'react';
// export default function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);
//   }
//   return (
//     <>
//       <button onClick={handleClick}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <video width="250">
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   )
// }

// For an extra challenge, keep the “Play” button in sync with whether the video is playing even if the user right-clicks the video and plays it using the built-in browser media controls. You might want to listen to onPlay and onPause on the video to do that.

//solution
import { useState, useRef } from "react";
import { flushSync } from "react-dom";

export default function VideoPlayer() {
  const state = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    console.log("handleClick");
    flushSync(() => {
      const nextIsPlaying = !isPlaying;
      setIsPlaying(nextIsPlaying);
      isPlaying ? state.current.pause() : state.current.play();
    });
  }

  function control(e) {
    console.log(e.type);
    if (e.type == "play") {
      if (!isPlaying) { // mtlb play dikha raha hoga
        flushSync(() => {
          const nextIsPlaying = !isPlaying;
          setIsPlaying(nextIsPlaying);
        })
      }
    } else {
      if (isPlaying) { // mtlb play dikha raha hoga
        flushSync(() => {
          const nextIsPlaying = !isPlaying;
          setIsPlaying(nextIsPlaying);
        })
      }
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video width="250" ref={state} onPause={control} onPlay={control}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
