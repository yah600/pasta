import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation(['common']); // Initialize useTranslation with common namespace

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">{t('oops page not found', { ns: 'common' })}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {t('return to home', { ns: 'common' })}
        </a>
      </div>
    </div>
  );
};

export default NotFound;