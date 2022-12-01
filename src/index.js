// Imports
import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// Constants
const API_KEY = 'AIzaSyCHwPT9KQh-ZwuvLgJjdHW-Qx9sS0leBRM'

// Create the First Component that will produce some HTMl
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { videos: [], selectedVideo: null }

    this.videoSearch('zen music')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] })
      // this.setState({ videos: videos })
    })
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

// Take this component's generated HTML to the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
