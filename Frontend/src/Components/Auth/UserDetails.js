import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import axios from 'axios';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/api/auth/getUserDetails', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        console.log('User data from backend:', response.data);
        
        setUser(response.data.user || response.data);
      } catch (error) {
        console.error('Failed to fetch user details:', error);
       
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:3001/api/auth/logout',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Please try again.');
    }
  };

  if (!user) return <p>Loading user info...</p>;

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <h2 className={styles.authTitle}>User Details</h2>
        <p><strong>Name:</strong> {user.name || 'N/A'}</p>
        <p><strong>Email:</strong> {user.email || 'N/A'}</p>
        <p><strong>Mobile:</strong> {user.mobile || 'N/A'}</p>

        <button onClick={handleLogout} className={styles.submitButton}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
