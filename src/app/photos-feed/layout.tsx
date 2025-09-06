import React from 'react'

const PhotosFeedLayout = ({children,modal}:{children:React.ReactNode,modal:React.ReactNode}) => {
  return (
    <>
    {children}
    {modal}
    </>
  )
}

export default PhotosFeedLayout