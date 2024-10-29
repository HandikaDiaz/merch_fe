import { FormControl } from "@mui/material";
import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import CustomTextField from "../../../../components/custom-text-field";

interface InputPhoneProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string;
    label: string;
    id: string;
}

const CustomPhoneNumber = React.forwardRef<NumericFormatProps, InputPhoneProps>(
    function CustomPhoneNumber(props, ref) {
        const { onChange, label, id, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    const event = {
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    } as React.ChangeEvent<HTMLInputElement>;
                    onChange(event);
                }}
                customInput={CustomTextField}
                allowNegative={false}
                valueIsNumericString
                inputMode="numeric"
                placeholder="08xx-xxxx-xxxx"
                id={id}
            />
        );
    }
);

const PhoneInput = ({
    value,
    onChange,
    label,
    id,
}: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    id: string;
}) => {
    return (
        <FormControl sx={{ backgroundColor: 'transparent', width: '100%', mt: 3 }}>
            <CustomPhoneNumber
                value={value}
                label={label}
                onChange={onChange}
                name="phone"
                id={id}
            />
        </FormControl>
    );
};

export default PhoneInput;
