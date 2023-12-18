import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ADMIN_ROUTE, CASE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SETTINGS_ROUTE } from '../../utils/consts'
import { MainPage } from '../../pages/MainPage'
import { AdminPage } from '../../pages/AdminPage'
import { Auth } from '../../pages/Auth'
import { MyCase } from '../../pages/MyCase'
import { Context } from '../..'
import { SettingPage } from '../../pages/SettingPage'

export const AppRouter = () => {
  const {user} = useContext(Context)
  // console.log(user.isAuth)
  return (
    <Routes>
          <Route path={ADMIN_ROUTE} element={<AdminPage />} />
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={MAIN_ROUTE} element={<MainPage />} />
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={REGISTRATION_ROUTE} element={<Auth />} />
          <Route path={CASE_ROUTE + '/:id'} element={<MyCase />} />
          <Route path={SETTINGS_ROUTE} element={<SettingPage/>}/>
          <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  )
}
