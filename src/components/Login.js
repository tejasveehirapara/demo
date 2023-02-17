import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {
    
    const [userType, setUserType] = useState('user');
const [role, setRole] = useState("")

    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        if (userType === 'admin' && username === 'admin' && password === 'admin') {
            localStorage.setItem("role", userType)
            setRole(userType)
            // localStorage.setItem("admin", userType)
            navigate("/admin")
          
        //    localStorage.getItem("admin")
        } else if (userType === 'user' && username === 'user' && password === 'user') {
            // localStorage.setItem("user",userType)
            localStorage.setItem("role", userType)

            setRole(userType)
            navigate("/array")
       
        } else {
            setError('Invalid username or password!');
        }
    };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

useEffect(() => {
},[])

    return (
        <div>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="userType">Login as:</label>
                        <select
                            value={userType}
                            onChange={e => setUserType(e.target.value)}
                            id="userType"
                            required
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button onClick={handleSubmit} type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login
