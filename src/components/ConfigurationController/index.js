import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleLeftNavbarCheckbox = () => {
        onToggleShowLeftNavbar()
      }

      const toggleContentCheckbox = () => {
        onToggleShowContent()
      }

      const toggleRightNavbarCheckbox = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="bg-container">
          <h1 className="layout-heading">Layout</h1>
          <div>
            <div className="checkbox-container">
              {showContent === true ? (
                <input
                  type="checkbox"
                  id="content"
                  className="checkbox-El"
                  onChange={toggleContentCheckbox}
                  checked
                />
              ) : (
                <input
                  type="checkbox"
                  id="content"
                  className="checkbox-El"
                  onChange={toggleContentCheckbox}
                />
              )}
              <label className="label-El" htmlFor="content">
                Content
              </label>
            </div>
            <div className="checkbox-container">
              {showLeftNavbar === true ? (
                <input
                  type="checkbox"
                  className="checkbox-El"
                  id="LeftNav"
                  checked
                  onChange={toggleLeftNavbarCheckbox}
                />
              ) : (
                <input
                  type="checkbox"
                  className="checkbox-El"
                  id="LeftNav"
                  onChange={toggleLeftNavbarCheckbox}
                />
              )}
              <label className="label-El" htmlFor="LeftNav">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-container">
              {showRightNavbar === true ? (
                <input
                  type="checkbox"
                  className="checkbox-El"
                  checked
                  id="RightNav"
                  onChange={toggleRightNavbarCheckbox}
                />
              ) : (
                <input
                  type="checkbox"
                  className="checkbox-El"
                  id="RightNav"
                  onChange={toggleRightNavbarCheckbox}
                />
              )}
              <label className="label-El" htmlFor="RightNav">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
