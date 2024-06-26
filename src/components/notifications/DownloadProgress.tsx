import React, {FC} from 'react';

//MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

//MUI-ICONS
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';

//UTILS
import {useTranslation} from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

//STYLES
const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mb:1
};

const progressContainer = {
  display: 'flex',
  alignItems: 'center'
};

export type DownloadProgressProps = {
  progress?: number,
  isOpen?: boolean,
  onClose?: () => void,
  onCancel?: () => void,
  description: string
};

const DownloadProgress: FC<DownloadProgressProps>  = ({progress, isOpen=false, onClose, description, onCancel}) => {
  const {t} = useTranslation();
  const variant = progress === undefined ? 'indeterminate' : 'determinate';
  const title = progress === undefined ? t('actions.unzipping') : t('actions.downloading');
  return <>
    <Dialog open={isOpen} fullWidth onClose={onClose} >
      <DialogContent sx={{mt: 0, display: 'flex', flexDirection: 'column', bgcolor: 'grey.800'}}>
        <Box sx={container}>
          <Typography variant='body1' sx={{color: 'primary.contrastText'}}>{title}</Typography>
          {onClose && <IconButton onClick={onClose}>
            <CloseIcon sx={{color: 'common.white'}}/>
          </IconButton>}
        </Box>
        <Typography variant='body2' sx={{mb: 0.5, color: 'primary.contrastText'}}>{description}</Typography>
        <Box sx={progressContainer}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant={variant} value={progress}/>
          </Box>
          {progress ? <Typography variant="body2" color="primary.contrastText">{progress?.toFixed(1)}%</Typography> : null}
        </Box>
        { onCancel && <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2}}>
          <Button startIcon={<CancelIcon sx={{color: 'primary.contrastText', float: 'left'}}/>} onClick={onCancel} sx={{color: 'primary.contrastText', pb: 0}}>{t('actions.cancel')}</Button>
        </Box>}
      </DialogContent>
    </Dialog>
  </>;
};

export default DownloadProgress;
