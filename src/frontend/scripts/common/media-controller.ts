import { Utils } from './utils';
export class MediaController {
  static bindScrollEvents() {
    const videoFrames: NodeListOf<HTMLVideoElement> = document.querySelectorAll(
      'figure video',
    );
    if (window.innerWidth < 768) {
      window.addEventListener('scroll', () => {
        for (const videoFrame of videoFrames) {
          const isPlaying =
            videoFrame.currentTime > 0 &&
            !videoFrame.paused &&
            !videoFrame.ended;
          if (Utils.isElementInViewport(videoFrame) && !isPlaying) {
            videoFrame.click();
            videoFrame.play();
          }
        }
      });
      return;
    }

    for (const videoFrame of videoFrames) {
      videoFrame.addEventListener('mouseover', () => videoFrame.play());
      if (videoFrame.closest('li')) {
        videoFrame
          .closest('li')
          .addEventListener('mouseover', () => videoFrame.play());
      }
    }
  }
}
