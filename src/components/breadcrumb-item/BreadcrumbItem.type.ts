import React from 'react'

export interface BreadcrumbItemProps {
  isActive?: boolean | undefined
  icon?: React.ReactNode | undefined,
  label: string
}

export interface IBreadcrumbItemProps extends BreadcrumbItemProps {
  isLast: boolean
}
