import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
      <div id="download">
        <a href={'https://ytmp3.mobi/pt11/'}>
          <img
            height="50px"
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1m6XPNL-EW3TfpweCAj8tq6aRtL-FsVr5g&usqp=CAU'
            }
          />
          Download with URL
        </a>
        <p>
          Disclaimer: DO NOT violate Youtube's TOS, download only videos with
          free copyright license.
        </p>
      </div>
    </div>
  )
}

export default VideoDetail
