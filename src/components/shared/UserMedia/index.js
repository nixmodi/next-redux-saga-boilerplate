import React, { forwardRef } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import images from 'src/config/images'
import { getUserData } from 'src/utils/storageUtils'
import Avatar from '../Avatar'

const propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  size: PropTypes.number,
  link: PropTypes.bool
}

const defaultProps = {
  className: undefined,
  user: {},
  size: 32,
  link: true
}

// TODO - SOLVE ISSUE OF LINK NOT WORKING WHEN PASSING FUNCTIONAL COMPONENT.
// const Content = React.forwardRef(({ className, user, size, ...otherProps }, ref) => {
//   const sharedProps = {
//     className,
//     size,
//     'data-testid': name ? `avatar:${name}` : 'avatar',
//     ...otherProps
//   }

//   const name = user.full_name ? user.full_name : `${user.first_name} ${user.last_name}`

//   return (
//     <div className='media align-items-center' ref={ref}>
//       <div className={`user-avtar avtar-${sharedProps.size} mr-3`}>
//         <Avatar avatarUrl={user.avatar} name={name} size={sharedProps.size} />
//       </div>

//       <div className='media-body text-left'>
//         <h5 className='font-weight-normal m-0'>
//           <a href='#' className='mr-2'>
//             {name}
//           </a>
//         </h5>
//         <p className='m-0 alpha-50'>@{user.username}</p>
//       </div>
//     </div>
//   )
// })

const UserMedia = ({ className, verifiedIcon = false, user, size, ...otherProps }) => {
  const sharedProps = {
    className,
    size,
    'data-testid': name ? `avatar:${name}` : 'avatar',
    ...otherProps
  }

  const name = user.full_name ? user.full_name : `${user.first_name} ${user.last_name}`

  const userData = getUserData()

  return (
    <>
      {sharedProps.link ? (
        <>
          <Link href={`${userData?.id === user.id ? '/account' : '/[username]'}`} as={`${userData?.id === user.id ? '/account' : `/${user.username}`}`}>
            <div className='media align-items-center'>
              <div className={`user-avtar avtar-${sharedProps.size} mr-3`}>
                <Avatar avatarUrl={user.avatar} name={name} size={sharedProps.size} />
              </div>

              <div className='media-body text-left'>
                <h5 className='font-weight-normal m-0'>
                  <a href='#' className='mr-1'>
                    {name}
                    {/* <img src={images.app.verifiedIcon} alt={props.user.name} /> */}
                  </a>
                  {verifiedIcon && user.personal_info_status === 'approved' && <img src={images.app.verifiedIcon} />}
                </h5>
                <p className='m-0 alpha-50'>@{user.username}</p>
              </div>
            </div>
          </Link>
        </>
      ) : (
        <div className='media align-items-center'>
          <div className={`user-avtar avtar-${sharedProps.size} mr-3`}>
            <Avatar avatarUrl={user.avatar} name={name} size={sharedProps.size} />
          </div>

          <div className='media-body text-left'>
            <h5 className='font-weight-normal m-0'>
              <a href='#' className='mr-2'>
                {name}
              </a>
            </h5>
            <p className='m-0 alpha-50'>@{user.username}</p>
          </div>
        </div>
      )}
    </>
  )
}

UserMedia.propTypes = propTypes
UserMedia.defaultProps = defaultProps

export default UserMedia
