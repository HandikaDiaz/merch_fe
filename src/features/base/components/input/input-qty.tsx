import { FormControl } from '@mui/material';
import React from 'react';
import CustomTextField from '../../../../components/custom-text-field';

export default function QtyInput({ register, setValueQty, errors }: any) {
    const [values, setValue] = React.useState('');
    const handleChange = (event: any) => {
        const newValue = event.target.value;
        setValue(newValue);
        setValueQty("qty", newValue);
    };
    return (
        <FormControl sx={{ backgroundColor: 'transparent', width: '100%', mt: 3 }}>
            <CustomTextField
                label="Qty"
                value={values}
                {...register("qty", { required: "Qty is required" })}
                onChange={handleChange}
                name="qty"
                id="formatted-numberformat-input"
                error={!!errors.price}
                variant="outlined"
            />
        </FormControl>
    );
};
