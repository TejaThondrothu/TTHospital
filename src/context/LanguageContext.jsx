import React, { createContext, useContext, useState } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const translate = (key) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
      translation = translation?.[k];
    }
    
    return translation || key;
  };

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const value = {
    currentLanguage,
    changeLanguage,
    translate,
    availableLanguages: [
      { code: 'en', name: 'English' },
      { code: 'te', name: 'తెలుగు' },
      { code: 'hi', name: 'हिंदी' },
      { code: 'ta', name: 'தமிழ்' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};