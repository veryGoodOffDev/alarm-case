import React, { useContext} from 'react'
import { Context } from '..'
import { CasesList } from './CasesList';

export const MainPage = () => {
    const {user} = useContext(Context)
    console.log(user.user)
  return (
    <div className='main'>
      <CasesList/>
      <div className='button__add'>
      </div>
    </div>
  )
}
