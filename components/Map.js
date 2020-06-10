const React = require('react');

class Map extends React.PureComponent {
  render() {
    const { idyll, hasError, updateProps, ...props } = this.props;
    return (
    <div className="Map">
      <div className={this.props.class}
           data-src="visualisation/2704573" 
           data-url="https://flo.uri.sh/visualisation/2704573/embed">
           <script src="https://public.flourish.studio/resources/embed.js"></script>
      </div>
    </div>
    );
  }
}

module.exports = Map;
