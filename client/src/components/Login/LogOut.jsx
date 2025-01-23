import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Delete the token cookie by setting its expiry date to the past
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

        // Navigate the user back to the login page
        navigate("/login");
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
