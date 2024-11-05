import { Avatar, FormControl, Input, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useMessage } from "../../hooks/message";

function ComplainCard() {
    const { data } = useMessage();
    const currentUserId = 1;
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (
        <Stack justifyContent={'flex-end'} direction={'column'} sx={{ width: '90%', height: '95%', mx: 'auto', gap: 2.5 }}>
            {data?.map((message) => (
                <Stack
                    key={message.id}
                    direction={message.senderId === currentUserId ? 'row' : 'row-reverse'}
                    gap={2}
                    sx={{ alignSelf: message.senderId === currentUserId ? 'flex-start' : 'flex-end' }}>
                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                    <Typography
                        sx={{
                            color: 'primary.main',
                            bgcolor: message.senderId === currentUserId ? '#575757' : '#4CAF50',
                            p: 1.5,
                            borderRadius: message.senderId === currentUserId ? '15px 15px 15px 0' : '15px 15px 0 15px',
                            width: '75%'
                        }}>
                        {message.content}
                    </Typography>
                </Stack>
            ))}
            <FormControl sx={{ backgroundColor: 'transparent', width: '100%', mt: 3 }}>
                <Input inputRef={inputRef} placeholder="Send Message" sx={{ p: 0.2, border: 'none', px: 1.3 }} type='text' />
            </FormControl>
        </Stack>
    )
}

export default ComplainCard