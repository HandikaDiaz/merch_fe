import { useQuery } from "@tanstack/react-query";
import { MessageEntity } from "../../../entities/message-entity";
import { apiV1 } from "../../../utils/api";
import Cookies from "js-cookie";

export function useMessage() {
    async function getMessage() {
        const res = await apiV1.get<null, { data: MessageEntity[] }>('/message/history', {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        });
        return res.data;
    }

    const { data, isLoading } = useQuery<MessageEntity[], null, MessageEntity[]>({
        queryKey: ['message'],
        queryFn: getMessage
    });
    const lastMessages = data?.reduce((acc, message) => {
        const userId = message.senderId;
        if (!acc[userId] || acc[userId].createdAt < message.createdAt) {
            acc[userId] = message;
        }
        return acc;
    }, {} as Record<number, MessageEntity>);

    return {
        data,
        lastMessages: lastMessages ? Object.values(lastMessages) : [],
        isLoading
    }
}