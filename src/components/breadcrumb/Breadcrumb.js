import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BreadcrumbContainer, BreadcrumbItemBox, BreadcrumbItem } from './breadcrumb.style'

const Breadcrumb = (props = {}) => {
  const { items } = props
  const [breadcrumbItems, setBreadcrumbItems] = useState([])

  useEffect(() => {
    setBreadcrumbItems(items || [])
  }, [items])

  return (
    <BreadcrumbContainer>
      <BreadcrumbItemBox>
        {breadcrumbItems &&
          breadcrumbItems.map((breadcrumbItem) => (
            <BreadcrumbItem isSelected={breadcrumbItem.isSelected} key={breadcrumbItem.id}>
              {breadcrumbItem.label}
            </BreadcrumbItem>
          ))}
      </BreadcrumbItemBox>
    </BreadcrumbContainer>
  )
}

Breadcrumb.defaultProps = {
  items: []
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default Breadcrumb
