import { Routes, Route } from 'react-router-dom';
import Home from '../View/Home/Home';
import About from '../View/About/About';
import Settings from '../View/Settings/Settings';
import Error404 from '../View/Error/Error404';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MainRoute() {

    return (
        <>
            
            <Routes>


                <Route
                    path="/*"
                    element={
                        <Routes>
                            <Route path="/" element={<Home />} /> 
                            <Route path="/*" element={<Error404 />} />
                        </Routes>
                    }
                />


                <Route
                    path="/about/*"
                    element={
                        <Routes>
                            <Route path="/" element={<About />} /> 
                            <Route path="/*" element={<Error404 />} />
                        </Routes>
                    }
                />

                <Route
                    path="/settings/*"
                    element={
                        <Routes>
                            <Route path="/" element={<Settings />} /> 
                            <Route path="/*" element={<Error404 />} />
                        </Routes>
                    }
                />


            </Routes>

        </>
    )


}