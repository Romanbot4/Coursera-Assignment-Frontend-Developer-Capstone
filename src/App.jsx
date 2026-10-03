import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </Layout>
        </>
    )
}


export default App;
