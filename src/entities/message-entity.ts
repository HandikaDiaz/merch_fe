export interface MessageEntity {
    id: number;
    content: string;
    createdAt: Date;
    senderId: number;
    conversationId: number;
}