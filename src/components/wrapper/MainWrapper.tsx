"use client"
import store from "@/redux/store"
import React from "react"
import { Provider } from "react-redux"
import { Toaster } from "sonner"

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
            <Toaster />
        </Provider>
    )
}

export default MainWrapper
