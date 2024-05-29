import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => <div>Home Page</div>;
const Login = () => <div>Login Page</div>;
const AdminDashboard = () => <div>AdminDashboard Page</div>;
const NotFound = () => <div>404 Not Found</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
