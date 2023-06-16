import React from 'react'
import { AppBar } from '../../Components'
import { Layout, LayoutProps } from 'react-admin'

const AppBarLayout = (props: LayoutProps) => {
  return (
    <Layout {...props} appBar={AppBar} />
  )
}

export default AppBarLayout