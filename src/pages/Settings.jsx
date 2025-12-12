import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Settings.css';

const Settings = () => {
  const { user, updateUser, updateAddress, updatePreferences } = useUser();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    street: user.address.street,
    city: user.address.city,
    state: user.address.state,
    zipCode: user.address.zipCode,
    country: user.address.country,
    notifications: user.preferences.notifications,
    newsletter: user.preferences.newsletter,
    language: user.preferences.language
  });

  const [avatarPreview, setAvatarPreview] = useState(user.avatar);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveAvatar = () => {
    const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=667eea&color=fff&size=200`;
    setAvatarPreview(defaultAvatar);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Determine avatar to save
    let avatarToSave = avatarPreview;
    
    // If avatar preview changed (user uploaded new image), use it
    if (avatarPreview !== user.avatar && avatarPreview.startsWith('data:image')) {
      avatarToSave = avatarPreview;
    }
    // If name changed and current avatar is generated, regenerate it
    else if (formData.name !== user.name && user.avatar.includes('ui-avatars.com')) {
      avatarToSave = `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=667eea&color=fff&size=200`;
    }
    // Otherwise keep current avatar
    else {
      avatarToSave = user.avatar;
    }
    
    updateUser({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      avatar: avatarToSave
    });

    updateAddress({
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      country: formData.country
    });

    updatePreferences({
      notifications: formData.notifications,
      newsletter: formData.newsletter,
      language: formData.language
    });

    alert('Settings saved successfully!');
    navigate('/profile');
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <button onClick={handleCancel} className="cancel-btn">
          ← Back to Profile
        </button>
      </div>

      <form onSubmit={handleSubmit} className="settings-form">
        <div className="settings-section">
          <h2>Profile Picture</h2>
          <div className="avatar-upload-section">
            <div className="avatar-preview-container">
              <img 
                src={avatarPreview} 
                alt="Avatar preview" 
                className="avatar-preview"
              />
              <div className="avatar-overlay">
                <button 
                  type="button" 
                  onClick={handleAvatarClick}
                  className="avatar-upload-btn"
                >
                  Change Photo
                </button>
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: 'none' }}
            />
            <div className="avatar-actions">
              <button 
                type="button" 
                onClick={handleAvatarClick}
                className="avatar-action-btn"
              >
                Upload New Photo
              </button>
              <button 
                type="button" 
                onClick={handleRemoveAvatar}
                className="avatar-action-btn remove"
              >
                Remove Photo
              </button>
            </div>
            <p className="avatar-hint">
              Recommended: Square image, at least 200x200 pixels. Max file size: 5MB
            </p>
          </div>
        </div>

        <div className="settings-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>Shipping Address</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="street">Street Address</label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State/Province</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">ZIP/Postal Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>Preferences</h2>
          <div className="preferences-form">
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleInputChange}
                />
                <span>Enable Email Notifications</span>
              </label>
              <p className="checkbox-description">
                Receive email updates about your orders and account activity
              </p>
            </div>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                />
                <span>Subscribe to Newsletter</span>
              </label>
              <p className="checkbox-description">
                Get weekly updates about new products and special offers
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;

