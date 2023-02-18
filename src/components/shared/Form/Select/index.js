import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import useOnOutsideClick from '../../../../utils/onOutsideClick'
import { KeyCodes } from '../../../../config/keyCodes'
import Icon from '../../Icon'
import Dropdown from './Dropdown'
import { StyledSelect, ValueContainer, ChevronIcon, Placeholder, ValueMulti, ValueMultiItem, AddMore } from './styles'

const propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'empty']),
  dropdownWidth: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  invalid: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onCreate: PropTypes.func,
  isMulti: PropTypes.bool,
  withClearValue: PropTypes.bool,
  renderValue: PropTypes.func,
  renderOption: PropTypes.func,
  remoteMethod: PropTypes.func,
  search: PropTypes.bool
}

const defaultProps = {
  className: undefined,
  variant: 'normal',
  dropdownWidth: undefined,
  name: undefined,
  value: undefined,
  defaultValue: undefined,
  placeholder: 'Select',
  invalid: false,
  onCreate: undefined,
  isMulti: false,
  withClearValue: true,
  renderValue: undefined,
  renderOption: undefined,
  remoteMethod: undefined,
  search: false
}

const Select = ({
  className,
  variant,
  dropdownWidth,
  name,
  value: propsValue,
  defaultValue,
  placeholder,
  invalid,
  options,
  onChange,
  onCreate,
  isMulti,
  withClearValue,
  search,
  renderValue: propsRenderValue,
  renderOption: propsRenderOption,
  remoteMethod
}) => {
  const [stateValue, setStateValue] = useState(defaultValue || (isMulti ? [] : null))
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const isControlled = propsValue !== undefined
  const value = isControlled ? propsValue : stateValue

  const $selectRef = useRef()
  const $inputRef = useRef()

  const activateDropdown = () => {
    if (isDropdownOpen) {
      if (search) {
        $inputRef.current.focus()
      }
    } else {
      setDropdownOpen(true)
    }
  }

  const deactivateDropdown = () => {
    setDropdownOpen(false)
    setSearchValue('')
    $selectRef.current.focus()
  }

  const _setSearchValue = value => {
    setSearchValue(value)
    if (remoteMethod) {
      remoteMethod(value)
    }
  }

  useOnOutsideClick($selectRef, isDropdownOpen, deactivateDropdown)

  const preserveValueType = newValue => {
    const areOptionValuesNumbers = options.some(option => typeof option.value === 'number')

    if (areOptionValuesNumbers) {
      if (isMulti) {
        return newValue.map(Number)
      }
      if (newValue) {
        return Number(newValue)
      }
    }
    return newValue
  }

  const handleChange = newValue => {
    if (!isControlled) {
      setStateValue(preserveValueType(newValue))
    }
    onChange(preserveValueType(newValue))
  }

  const removeOptionValue = optionValue => {
    handleChange(value.filter(val => val !== optionValue))
  }

  const handleFocusedSelectKeydown = event => {
    if (isDropdownOpen) return

    if (event.keyCode === KeyCodes.ENTER) {
      event.preventDefault()
    }
    if (event.keyCode !== KeyCodes.ESCAPE && event.keyCode !== KeyCodes.TAB && !event.shiftKey) {
      setDropdownOpen(true)
    }
  }

  const getOption = optionValue => options.find(option => option.value === optionValue)
  const getOptionLabel = optionValue => (getOption(optionValue) || { label: '' }).label

  const isValueEmpty = isMulti ? !value.length : !getOption(value)

  return (
    <StyledSelect className={`${className}`} variant={variant} ref={$selectRef} tabIndex='0' onKeyDown={handleFocusedSelectKeydown} invalid={invalid}>
      <div className='input' variant={variant} data-testid={name ? `select:${name}` : 'select'} onClick={activateDropdown}>
        {isValueEmpty && <Placeholder>{placeholder}</Placeholder>}

        {!isValueEmpty && !isMulti && propsRenderValue ? propsRenderValue({ value }) : getOptionLabel(value)}

        {!isValueEmpty && isMulti && (
          <ValueMulti variant={variant}>
            {value.map(optionValue =>
              propsRenderValue ? (
                propsRenderValue({
                  value: optionValue,
                  removeOptionValue: () => removeOptionValue(optionValue)
                })
              ) : (
                <ValueMultiItem key={optionValue} onClick={() => removeOptionValue(optionValue)}>
                  {getOptionLabel(optionValue)}
                  <Icon type='cancel' size={8} />
                </ValueMultiItem>
              )
            )}
            <AddMore>
              <Icon type='plus' />
              Add more
            </AddMore>
          </ValueMulti>
        )}

        {(!isMulti || isValueEmpty) && variant !== 'empty' && <ChevronIcon className='input-icon' type='chevron-down' top={1} />}
      </div>

      {isDropdownOpen && (
        <Dropdown
          dropdownWidth={dropdownWidth}
          value={value}
          isValueEmpty={isValueEmpty}
          searchValue={searchValue}
          setSearchValue={_setSearchValue}
          $selectRef={$selectRef}
          $inputRef={$inputRef}
          deactivateDropdown={deactivateDropdown}
          options={options}
          onChange={handleChange}
          remoteMethod={remoteMethod}
          onCreate={onCreate}
          isMulti={isMulti}
          withClearValue={withClearValue}
          propsRenderOption={propsRenderOption}
        />
      )}
    </StyledSelect>
  )
}

Select.propTypes = propTypes
Select.defaultProps = defaultProps

export default Select
