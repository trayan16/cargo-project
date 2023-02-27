import * as React from 'react';

interface TruckFormProps {
    handleToggleOpen?: () => void;
    open?: boolean;
  }
export const TruckForm: React.FC<TruckFormProps> = () => {

  return (
    <div>
      TruckForm
    </div>
  );
}