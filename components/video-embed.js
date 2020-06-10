const React = require('react');

class VideoEmbed extends React.PureComponent {
  render() {
    const { idyll, hasError, updateProps, ...props } = this.props;
    return (
    <div className="video-embed">
      <iframe className="video"
        src="https://www.youtube.com/embed/{this.props.videoId}"
        frameborder="0" 
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    );
  }
}

module.exports = VideoEmbed;

- 0.