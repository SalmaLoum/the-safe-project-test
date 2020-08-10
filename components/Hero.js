const React = require('react');

class Hero extends React.PureComponent {
  render() {
    const { idyll, hasError, updateProps, ...props } = this.props;
    return (
      <div {...props}>
        <div className="Hero">
          <h1>The Safe Project</h1>
          <h4>
            By: <a href="https://salmaloum.com">Salma Loum</a>
          </h4>
          <h4> June 10, 2020</h4>
        </div>
        
        <h3>If you are in immediate danger <a href="tel:911">call 911</a> </h3>
       

        <h3>Trigger warning : </h3>
        <h3>This piece contains information about sexual assault</h3>
        <p> In the United States, many survivors of sexual assault must endure a lengthy, invasive physical and verbal examination to help authorities gather evidence to pursue and press charges against their attackers.
          Survivors who endure this process, known as the Sexual Assault Forensic Examination, or SAFE, often see their exam results languish in a backlog of cases. 
          This project seeks to illustrate the experience of sexual assault survivors who go through the SAFE process.
          Use the menu above to jump to a particular section, or scroll through the project to learn more, watch videos, and experience a first person prespective a SAFE exam in virtual reality.
        </p>
        <br/>
        <h3>Scroll to begin </h3>
        <div className="mouse"><span></span></div>
      </div>
    );
  }
}

module.exports = Hero;
