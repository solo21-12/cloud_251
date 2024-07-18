import { useSession, signIn, signOut } from "next-auth/react"


import React from 'react'

type Props = {}

const AppAuthButton = (props: Props) => {

    const { data: session } = useSession()
    
  return (
    <div>AppAuthButton</div>
  )
}

export default AppAuthButton