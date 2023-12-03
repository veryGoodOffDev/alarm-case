import { AdminPage } from "./pages/AdminPage"
import { Auth } from "./pages/Auth"
import { LkPage } from "./pages/LkPage"
import { MainPage } from "./pages/MainPage"
import { MyCase } from "./pages/MyCase"
import { SettingPage } from "./pages/SettingPage"
import { ADMIN_ROUTE, LK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, CASE_ROUTE, SETTING_ROUTE, MAIN_ROUTE } from "./utils/consts"
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: AdminPage,
    },
    {
        path: LK_ROUTE,
        component: LkPage,
    },
    {
        path: SETTING_ROUTE,
        component: SettingPage,
    },
]
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        component: MainPage,
    },
    {
        path: CASE_ROUTE + '/id',
        component: MyCase,
    },
    {
        path: LOGIN_ROUTE,
        component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth,
    },
    
]