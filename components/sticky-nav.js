const React = require('react');

class StickyNav extends React.PureComponent {

  constructor(props) {
    super(props);
    this.closeNav = this.closeNav.bind(this);  
  }

  closeNav() {
    document.getElementById('showNav').checked = false;
  }

  render() {
    const { idyll, hasError, updateProps, ...props } = this.props;
    return (
      <div {...props}>

        <label id="showNavOn" htmlFor="showNav">&equiv;</label>
        <input id="showNav" type="checkbox" />

        <nav className="sticky"> 
            <label id="showNavOff" htmlFor="showNav">&times;</label>
            <ul>
                <li><a onClick={this.closeNav} href="#start">Start Again</a></li>
                <li><a onClick={this.closeNav} href="#what-is-safe?">What is SAFE?</a></li>
                <li><a onClick={this.closeNav} href="#sexual-assault-forensic-immersive-exam">Immersive Exam </a></li>
                <li><a onClick={this.closeNav} href="#why-a-backlog-exists?">Backlog Existance</a></li>
                <li><a onClick={this.closeNav} href="#how-is-california-overcoming-backlogs?">Overcoming Backlog</a></li>
                <li><a onClick={this.closeNav} href="#sexual-assault-response-teams-roadblocks">Response teams Roadblocks</a></li>
                <li><a onClick={this.closeNav} href="#sexual-assault-response-teams-in-california">Response Teams Map</a></li>
                <li><a onClick={this.closeNav} href="#help-and-resources">Get Help</a></li>
            </ul>
        </nav>
      </div>
    );
  }
}

module.exports = StickyNav;
