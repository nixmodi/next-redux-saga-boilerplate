import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  className: PropTypes.string,
  words: PropTypes.number,
  text: PropTypes.string
}

const defaultProps = {
  className: undefined,
  words: 160,
  text: ''
}

export const ReadMoreButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #999999;
  font-size: 13px;
  margin-left: 4px;
`

function ReadMore(props) {
  const ending = '...'
  const [showMore, setShowMore] = React.useState(false)

  const subStr = props.text ? props.text.substring(0, props.words - ending.length) + ending : ''

  if (!props.text || props.text.length <= props.words) {
    return <div style={{ width: '100%', wordWrap: 'break-word' }}>{props.text}</div>
  }

  return (
    <div style={{ width: '100%', wordWrap: 'break-word' }}>
      {showMore ? (
        <>
          {props.text}
          <ReadMoreButton onClick={() => setShowMore(false)}>Show less</ReadMoreButton>
        </>
      ) : (
        <>
          {subStr}
          <ReadMoreButton onClick={() => setShowMore(true)}>Show more</ReadMoreButton>
        </>
      )}
    </div>
  )
}

ReadMore.propTypes = propTypes
ReadMore.defaultProps = defaultProps

export default ReadMore
