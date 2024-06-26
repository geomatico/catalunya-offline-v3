import React, {FC} from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import {Theme} from '@mui/material/styles/createTheme';
import {useTranslation} from 'react-i18next';
import useIsLargeSize from '../../hooks/settings/useIsLargeSize';

export interface CancelButtonProps {
    variant?: 'text' | 'outlined' | 'contained',
    disabled?: boolean
 onCancel: () => void
}

const greyColor = 700;

const CancelButton: FC<CancelButtonProps> = ({
  variant = 'text',
  disabled= false,
  onCancel
}) => {
    
  const {t} = useTranslation();
  const [isLargeSize] = useIsLargeSize();
  const cancelButton = {
    bgcolor: variant === 'contained' ? 'common.white' : undefined,
    color: `grey.${greyColor}`,
    borderColor: (theme: Theme) => variant === 'contained' ? theme.palette.grey[greyColor] : undefined,
    minWidth: '120px',
    '&:hover': {
      bgcolor: variant === 'contained' ? 'common.white' : 'transparent',
      borderColor: (theme: Theme) => variant === 'contained' ? theme.palette.grey[greyColor] : undefined
    }
  };
  
  return <Button 
    size={isLargeSize ? 'large' : 'medium'}
    startIcon={<CancelIcon sx={{color: disabled ? 'action.disabled' : `grey.${greyColor}`}}/>}
    variant={variant}
    disabled={disabled}
    sx={cancelButton}
    onClick={() => onCancel()}>{t('actions.cancel')}</Button>;
};

export default CancelButton;