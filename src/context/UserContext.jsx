import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8900',
      address: {
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'United States'
      },
      avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=667eea&color=fff&size=200',
      preferences: {
        notifications: true,
        newsletter: false,
        language: 'en'
      }
    };
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const updateUser = (updatedData) => {
    setUser(prev => ({ ...prev, ...updatedData }));
  };

  const updateAddress = (addressData) => {
    setUser(prev => ({
      ...prev,
      address: { ...prev.address, ...addressData }
    }));
  };

  const updatePreferences = (preferencesData) => {
    setUser(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...preferencesData }
    }));
  };

  const value = {
    user,
    updateUser,
    updateAddress,
    updatePreferences
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};



