import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/confirmed" element={<ConfirmedBooking />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </>
    )
}


export default App;
