import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  AlertLabel,
} from '@/components/ui/alert';

import AlertInfo from '../icons/alert-info';
import AlertSuccess from '../icons/alert-success';
import AlertWarning from '../icons/alert-warning';

function AlertText({
  title,
  description,
  variant = 'warning',
  showLabel = false,
  labelText,
}) {
  const getIcon = (variant) => {
    switch (variant) {
      case 'info':
        return (
          <AlertInfo className="w-10 h-10 text-[var(--alert-info-icon)] bg-[var(--alert-bg-info)] rounded-full p-1 " />
        );
      case 'success':
        return (
          <AlertSuccess className="w-10 h-10 text-[var(--alert-success-icon)] bg-[var(--alert-bg-success)] rounded-full p-1" />
        );
      case 'warning':
      default:
        return (
          <AlertWarning className="w-10 h-10 text-[var(--alert-warning-icon)] bg-[var(--alert-bg-warning)] rounded-full p-1" />
        );
    }
  };
  const getLabel = (variant) => {
    switch (variant) {
      case 'info':
        return (
          <div className="text-[var(--alert-info-icon)] bg-[var(--alert-bg-info)] rounded-lg p-2">
            {labelText}
          </div>
        );
      case 'success':
        return (
          <div className="text-[var(--alert-success-icon)] bg-[var(--alert-bg-success)] rounded-lg p-2">
            {labelText}
          </div>
        );
      case 'warning':
      default:
        return (
          <div className="text-[var(--alert-warning-icon)] bg-[var(--alert-bg-warning)] rounded-lg p-2">
            {labelText}
          </div>
        );
    }
  };

  return (
    <Alert variant={variant} className="my-5">
      {showLabel && <AlertLabel>{getLabel(variant)}</AlertLabel>}
      {!showLabel && <AlertIcon>{getIcon(variant)}</AlertIcon>}
      <AlertTitle className="">{title}</AlertTitle>
      <AlertDescription className="text-base leading-[1.9] tracking-[0.3]">
        {description}
      </AlertDescription>
    </Alert>
  );
}

export default AlertText;
