import {GptVersion} from "@/app/constans";

export interface Dialog {
    // 头像
    avatar: string;
    // 小标题
    subTitle: string;
    // 对话最后时间
    timestamp: number;
    // 聊天头
    title: string;
    // 消息数
    count: number;

}

export interface Message {
    avatar: string;
    content: string;
    message_type: MessageType;
    time: number;
    direction?: MessageDirection;
    role:MessageRole;
    id:string;
    streaming?:boolean;
}
export enum MessageRole{
    system = "system",
    user="user",
    assistant="assistant",
}
export interface SessionConfig{
    gptVersion:GptVersion;
}

export enum MessageType {
    Link = "link",
    Pic = "pic",
    Text = "text",
}

export enum MessageDirection {
    Send = 0,
    Receive,
}
