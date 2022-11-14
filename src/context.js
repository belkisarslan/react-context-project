import { createContext, useContext } from "react";
//1. adım maincontext'i oluşturup export ediyoruz
const MainContext = createContext()

export {
    MainContext,
    useContext
}