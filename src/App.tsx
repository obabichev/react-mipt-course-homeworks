import React, {useMemo} from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {AppRouter} from "./components/Router/AppRouter";
import {ReactQueryDevtools} from "react-query/devtools";
import {AuthContextProvider} from "./components/Authorization/context/AuthContext";

function App() {

    const queryClient = useMemo( () => new QueryClient(), []);

    return (
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <AppRouter/>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </AuthContextProvider>
    );
}

export default App;
