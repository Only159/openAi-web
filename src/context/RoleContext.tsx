import {Role} from "@/types/role";
import React from "react";

export interface RoleContextType {
    roles:Role[];
    selected:number;
    setSelected:(id:number) => void;
}

export const RoleContext=React.createContext<RoleContextType>({
    roles:[],
    selected:-1,
    setSelected:(id:number)=>{}
})