import React, {FC} from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Thumbnail from '../../common/Thumbnail';
import AddImageButton from '../../buttons/AddImageButton';
import {useTranslation} from 'react-i18next';
import {ImagePath} from '../../../types/commonTypes';
import {SxProps} from '@mui/system/styleFunctionSx/styleFunctionSx';

const classes = {
  root: 'GenericInput-wrapper',
  title: 'GenericInput-title',
};

export interface ImageInputProps {
  isEditing: boolean,
    images: Array<ImagePath>,
    onAddImage: () => void,
    onDeleteImage: (image: ImagePath) => void,
    onDownloadImage: (image: ImagePath) => void,
    sx?: SxProps
}

const ImageInput: FC<ImageInputProps> = ({
  isEditing,
  images,
  onAddImage,
  onDeleteImage,
  onDownloadImage,
  sx  
}) => {
  const {t} = useTranslation();
    
  return <Stack className={classes.root} sx={sx}>
    <Typography className={classes.title} variant='caption'>{t('properties.images')}</Typography>
    <Stack direction='row' flexWrap='wrap'>
      {images.map(image =>
        <Thumbnail
          key={image}
          image={image}
          onDelete={onDeleteImage}
          onDownloadImage={onDownloadImage}
          isDeletable={isEditing}
        />)
      }
      {isEditing && <AddImageButton onAddImage={onAddImage}/>}
    </Stack>
  </Stack>;
};

export default ImageInput;