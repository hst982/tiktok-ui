import Header from '@layouts/components/Header'
import PropTypes from 'prop-types'

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
