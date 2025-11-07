import {create} from "zustand"

interface LogoutUser{
    IsAuthenticated: Boolean
    IsClicked: () => void
    IsLogin:() => void

}
export const UserLogout = create<LogoutUser> ((set) => ({
    IsAuthenticated:false,
    IsClicked:() =>set({IsAuthenticated:false}),
    IsLogin:() =>set({IsAuthenticated:true})
}))