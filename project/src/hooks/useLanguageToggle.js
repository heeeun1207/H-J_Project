import { useState } from "react";

export function useLanguageToggle(){
  const [language, setLanguage] = useState('ko'); 

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'ko' ? 'en' : 'ko'));
  };
  return { language, toggleLanguage };
}