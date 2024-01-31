import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar === true ? (
            <div className="left-navbar">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="ul-container">
                <li className="para">Item 1</li>
                <li className="para">Item 2</li>
                <li className="para">Item 3</li>
                <li className="para">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent === true ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar === true ? (
            <div className="right-navbar">
              <h1 className="right-navbar-heading">Right Navbar</h1>
              <div className="box-container">
                <p className="right-navbar-para">Ad 1</p>
                <p className="right-navbar-para">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
