import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const Content = () => {
        onToggleShowContent()
      }

      const LeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const RightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="Content"
                  onChange={Content}
                  checked={showContent}
                />
                <label htmlFor="Content" className="label-text">
                  Content
                </label>
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="LeftNavbar"
                  onChange={LeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="LeftNavbar" className="label-text">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="RightNavbar"
                  onChange={RightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="RightNavbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
