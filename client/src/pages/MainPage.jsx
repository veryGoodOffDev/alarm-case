import React, { useContext, useEffect, useState} from 'react'
import { Context } from '..'
import { CasesList } from './CasesList';
import axios from 'axios'
import { observer } from 'mobx-react-lite';

export const MainPage = observer(() => {
    const {user} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)


      // useEffect(() => {                  
      //   try {
      //     console.log(isLoading, '1 load')
          
         
      //       axios.get('https://6570b78109586eff6641d8a7.mockapi.io/api/cases/cases?userId=1')
      //       .then(({data}) => (
      //         user.setCases(data)
              
      //         ))
      //       .finally(() => setIsLoading(false))
      //       console.log(isLoading, 'после финалли')
      //   } catch(error) {
      //     console.log(error)
      //   } finally {
      //     console.log(isLoading, 'last load')
      //   }

      // }, [])
    
  return (
    <div className='main'>
      
      {isLoading ? <h1 style={{color:'#000'}}>Загрузка данных...</h1> : <CasesList isLoading={isLoading}/>}
      <div className='button__add'>
      </div>
    </div>
  )
})
