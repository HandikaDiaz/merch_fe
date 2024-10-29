import { Avatar, FormControl, Input, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

function ComplainCard() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (
        <Stack justifyContent={'end'} direction={'column'} sx={{ width: '90%', mx: 'auto' }}>
            <Stack direction={'row'} gap={2}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Typography sx={{ color: 'primary.main', bgcolor: '#575757', p: 1.5, borderRadius: '15px 15px 15px 0', width: '75%' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</Typography>
            </Stack>
            <Stack direction={'row'} gap={2}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Typography sx={{ color: 'primary.main', bgcolor: '#575757', p: 1.5, borderRadius: '15px 15px 15px 0', width: '75%' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</Typography>
            </Stack>
            <Stack direction={'row'} gap={2}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Typography sx={{ color: 'primary.main', bgcolor: '#575757', p: 1.5, borderRadius: '15px 15px 15px 0', width: '75%' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</Typography>
            </Stack>
            <FormControl sx={{ backgroundColor: 'transparent', width: '100%', mt: 3 }}>
                <Input inputRef={inputRef} placeholder="Send Message" sx={{ p: 0.2, border: 'none', px: 1.3 }} type='text' />
            </FormControl>
        </Stack>
    )
}

export default ComplainCard