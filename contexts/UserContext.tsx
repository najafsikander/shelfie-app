import {createContext, useEffect, useState} from 'react';
import React from 'react';
import {account} from '../lib/appwrite';
import { ID } from 'react-native-appwrite';

type UserData = {
    email: string;
    password: string;
}

interface UserContextType {
    user: any;
    login: (userData: any) => void;
    register: (userData: any) => void;
    logout: () => void;
    authChecked: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<UserData | any | null>(null);
    const [authChecked, setAuthChecked] = useState<boolean>(false);
    
    const login = async (userData:UserData) => {
        try {
            const {email, password} = userData;
            await account.createEmailPasswordSession(email,password);
            const response = await account.get();
            setUser(response);
        } catch (error:any) {
           console.error("Error logging in: ", error);
           throw Error(error.message);
        }
    };

    const register = async (userData:UserData) => {
        try {
            const {email, password} = userData;
            await account.create(ID.unique(),email, password);
        } catch (error:any) {
            console.error("Error registering: ", error);
            throw Error(error.message);
        }
    }
    
    const logout = async () => {
        await account.deleteSession('current');
        setUser(null);
    };

    const getInitialUserValue = async () => {
        try {
            console.log("Getting initial user value");
            const userResponse = await account.get();
            console.log("User response: ", userResponse);
            setUser(userResponse);
        } catch (error:any) {
            console.error("Error getting initial user value: ", error);
            setUser(null);
            throw Error(error.message);
        } finally {
            setAuthChecked(true);
        }
    }

    useEffect(() => {
        console.log("useEffect for getting initial user value");
        getInitialUserValue();
    }, []);
    
    return (
        <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
        {children}
        </UserContext.Provider>
    );
}