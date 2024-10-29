import { Box, Button, FormControl, Modal, Typography } from '@mui/material';
import { useEffect } from 'react';
import { ButtonLink } from '../../../../components/custom-button';
import CustomTextField from '../../../../components/custom-text-field';
import { LineMdMenuToCloseTransition } from '../../../../components/icons';
import { CategoryEntity } from '../../../../entities/category-entity';
import { useCategoryUpdate } from '../../hooks/category';

interface InitialFocusModalProps {
    isOpen: boolean;
    onClose: () => void;
    category: CategoryEntity;
}

function EditCategoryModal({ isOpen, onClose, category }: InitialFocusModalProps) {
    const { register, handleSubmit, onSubmit, errors, setValue } = useCategoryUpdate(category.id);

    useEffect(() => {
        if (category) {
            setValue('categoryName', category.categoryName)
        }
    }, [category])


    return (
        <Modal
            open={isOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={{ color: 'primary.main', margin: 'auto', width: '85%', height: 'auto', p: 10, bgcolor: 'background.paper', justifyContent: 'center', mt: 12 }}>
                <ButtonLink to={''} onClick={onClose} sx={{ position: 'absolute', right: 77, top: 82, color: 'primary.main', borderRadius: 'rounded !important', width: '40px', height: '40px' }}>
                    <LineMdMenuToCloseTransition />
                </ButtonLink>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Category
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl sx={{ backgroundColor: 'transparent', width: '100%', mt: 3 }}>
                        <CustomTextField variant="outlined" label="Name"  {...register('categoryName')} />
                    </FormControl>
                    <Box sx={{ mt: 6 }}>
                        <Button type='submit' sx={{ p: '5px 48.5%', backgroundColor: '#56c05a !important', ":hover": { backgroundColor: 'white !important', color: '#56c05a !important' } }}>
                            Update
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
}

export default EditCategoryModal;
