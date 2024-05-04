import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
} from '@/components/ui/alert';

import AlertInfo from '../icons/alert-info';
import AlertSuccess from '../icons/alert-success';
import AlertWarning from '../icons/alert-warning';

function AlertText({ title, description, variant = 'warning' }) {
  const getIcon = (variant) => {
    switch (variant) {
      case 'info':
        return <AlertInfo className="w-10 h-10 text-blue-400" />;
      case 'success':
        return <AlertSuccess className="w-10 h-10 text-green-400" />;
      case 'warning':
      default:
        return <AlertWarning className="w-10 h-10 text-yellow-400" />;
    }
  };

  return (
    <Alert variant={variant} className="mt-20">
      <AlertIcon>{getIcon(variant)}</AlertIcon>
      <AlertTitle className="ml-10">{title}</AlertTitle>
      <AlertDescription className="ml-10">{description}</AlertDescription>
    </Alert>
  );
}

export default AlertText;
