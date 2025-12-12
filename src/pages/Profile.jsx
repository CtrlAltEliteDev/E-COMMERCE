import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Profile.css';

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <Link to="/settings" className="settings-link">
          Edit Settings →
        </Link>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar-section">
            <img src={user.avatar} alt={user.name} className="profile-avatar" />
            <h2>{user.name}</h2>
            <p className="profile-email">{user.email}</p>
          </div>

          <div className="profile-info">
            <div className="info-section">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">{user.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">{user.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{user.phone}</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Shipping Address</h3>
              <div className="address-box">
                <p>{user.address.street}</p>
                <p>{user.address.city}, {user.address.state} {user.address.zipCode}</p>
                <p>{user.address.country}</p>
              </div>
            </div>

            <div className="info-section">
              <h3>Preferences</h3>
              <div className="preferences-list">
                <div className="preference-item">
                  <span>Email Notifications</span>
                  <span className={`preference-status ${user.preferences.notifications ? 'active' : 'inactive'}`}>
                    {user.preferences.notifications ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <div className="preference-item">
                  <span>Newsletter</span>
                  <span className={`preference-status ${user.preferences.newsletter ? 'active' : 'inactive'}`}>
                    {user.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}
                  </span>
                </div>
                <div className="preference-item">
                  <span>Language</span>
                  <span className="preference-status">{user.preferences.language.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;



