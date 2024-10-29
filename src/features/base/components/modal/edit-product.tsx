import { VisuallyHiddenInput } from '@chakra-ui/react';
import { Box, FormControl, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ButtonLink } from '../../../../components/custom-button';
import CustomTextField from '../../../../components/custom-text-field';
import PriceInput from '../input/input-price';
import QtyInput from '../input/input-qty';
import { LineMdMenuToCloseTransition } from '../../../../components/icons';

interface InitialFocusModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function EditProductModal({ isOpen, onClose }: InitialFocusModalProps) {
    const [fileName, setFileName] = useState('');
    const [valuesPrice, setValuesPrice] = useState({ numberformat: '' });
    const [valuesQty, setValuesQty] = useState({ numberformat: '' });

    const handleFileChange = (event: any) => {
        const files = event.target.files;
        if (files.length > 0) {
            setFileName(files[0].name);
        }
    };

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValuesPrice({ ...valuesPrice, [event.target.name]: event.target.value });
    };

    const handleChangeQty = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValuesQty({ ...valuesQty, [event.target.name]: event.target.value });
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={{ color: 'primary.main', margin: 'auto', width: '85%', height: 'auto', p: 5, bgcolor: 'background.paper', justifyContent: 'center', mt: 1.8 }}>
                <ButtonLink to={''} onClick={onClose} sx={{ position: 'absolute', right: 77, top: 5, color: 'primary.main', borderRadius: 'rounded !important', width: '40px', height: '40px' }}>
                    <LineMdMenuToCloseTransition />
                </ButtonLink>
                <Typography id="modal-modal-title" variant="h6">
                    Edit Product
                </Typography>
                <FormControl sx={{ backgroundColor: 'transparent', width: '100%', mt: 3 }}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <ButtonLink
                            to={''}
                            component="label"
                            tabIndex={-1}>
                            <Typography sx={{ p: 1 }}>Upload Image</Typography>
                            <VisuallyHiddenInput onChange={handleFileChange} sx={{ p: 0.2 }} type='file' multiple hidden />
                        </ButtonLink>
                        {fileName && <Typography sx={{ ml: 2, color: 'primary.main' }}>{fileName}</Typography>}
                    </Stack>
                </FormControl>
                <FormControl sx={{ backgroundColor: 'transparent', width: '100%', mt: 3 }}>
                    <CustomTextField variant="outlined" label="Name" />
                </FormControl>
                <FormControl sx={{ backgroundColor: 'transparent', width: '100%', mt: 3 }}>
                    <CustomTextField variant="outlined" label="Description" multiline rows={3} />
                </FormControl>
                <PriceInput value={valuesPrice.numberformat} onChange={handleChangePrice} />
                <QtyInput value={valuesQty.numberformat} onChange={handleChangeQty} />
                <Box sx={{ mt: 6 }}>
                    <ButtonLink to="" sx={{ p: '8px 48.5%', backgroundColor: '#56c05a !important', ":hover": { backgroundColor: 'white !important', color: '#56c05a !important' } }}>Save</ButtonLink>
                </Box>
            </Box>
        </Modal>
    );
}

export default EditProductModal;
