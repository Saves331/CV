import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='w-full text-center py-4 text-white'>   <h4>© 2025 Martin</h4>
            <FontAwesomeIcon icon={faGithub} />
    </div>

  )
}

export default Footer