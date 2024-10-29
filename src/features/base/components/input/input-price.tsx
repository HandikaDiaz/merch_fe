import { FormControl } from "@mui/material";
import React from "react";
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import CustomTextField from "../../../../components/custom-text-field";

interface CustomProps {
    onChange: (event: { target: { name: number; value: number } }) => void;
    name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
    function NumericFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: +props.name,
                            value: +values.value,
                        },
                    });
                }}
                thousandSeparator
                valueIsNumericString
                prefix="Rp. "
            />
        );
    },
);

export default function PriceInput({ register, setValuePrice, errors }: any) {
    const [values, setValue] = React.useState('');
    const handleChange = (event: any) => {
        const newValue = event.target.value;
        setValue(newValue);
        setValuePrice("price", Number(newValue)); 
    };
    
    return (
        <FormControl sx={{ backgroundColor: 'transparent', width: '100%', mt: 3 }}>
            <CustomTextField
                label="Price"
                value={values}
                {...register("price", { required: "Price is required" })}
                onChange={handleChange}
                name="price"
                id="formatted-numberformat-input"
                error={!!errors.price}
                // slotProps={{
                //     input: {
                //         inputComponent: NumericFormatCustom as any,
                //     },
                // }}
                variant="outlined"
            />
        </FormControl>
    );
};