import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface EmergencyBannerProps {
  isActive: boolean;
  message?: string;
  ctaText?: string;
  ctaLink?: string;
}

const EmergencyBanner = ({
  isActive,
  message,
  ctaText,
  ctaLink = '/emergency',
}: EmergencyBannerProps) => {
  const { t } = useTranslation();

  if (!isActive) {
    return null;
  }

  return (
    <div className="bg-destructive text-destructive-foreground p-4 rounded-lg text-center font-bold flex items-center justify-between flex-wrap gap-2">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-5 w-5" />
        <span>{message || t('critical_alert')}</span>
      </div>
      {ctaText && (
        <Link to={ctaLink}>
          <Button variant="destructive" className="border border-destructive-foreground">
            {ctaText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default EmergencyBanner;