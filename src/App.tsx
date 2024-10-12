// src/App.tsx

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter.tsx';
import CustomCursor from './components/atoms/CustomCursor.tsx'; // Adjust import based on file structure
import 'flowbite';


function App() {
    return (
        <BrowserRouter>
            {/* Include the CustomCursor component here to make it available on all pages */}
            <CustomCursor />
            <MainRouter />
            <ToastContainer className='p-2 md:p-0' />
        </BrowserRouter>
    );
}

export default App;
