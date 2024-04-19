import Icon from '@ant-design/icons';
import styles from '@/app/components/dialog/dialog-message-action.module.scss';
import {Select} from 'antd'
import BreakIcon from "../../icons/break.svg";
import {userChatStore} from '@/app/store/chat-store';

import {SessionConfig} from "@/types/chat";
import {GptVersion} from "@/app/constans";

function Action(props:{
    icon:JSX.Element;
    onClick?:()=>void;
}){
    return <div className={styles['chat-input-action']} onClick={props.onClick}>
        <div className={styles["icon"]}>
            {props.icon}
        </div>
    </div>
}
export default function DialogMessagesActions(props: {
    config: SessionConfig
}){
    const chatStore = userChatStore();
    const {config} = props
    return <div className={styles['chat-input-actions']}>
        <Action icon={<Icon component={BreakIcon} />} onClick={() => {
            chatStore.updateCurrentSession((session) => {
                if (session.clearContextIndex === session.messages.length) {
                    session.clearContextIndex = undefined;
                } else {
                    session.clearContextIndex = session.messages.length;
                }
            });
        }}></Action>
        <Select
            value={config?.gptVersion??GptVersion.GLM_3_5_TURBO}
            style={{ width: 160 }}
            options={[
                { value: GptVersion.GLM_3_5_TURBO, label: 'glm-3-turbo' },
                { value: GptVersion.CHATGLM_TURBO, label: 'chatglm_turbo' },
                { value: GptVersion.COGVIEW_3, label: 'cogview-3' },
                { value: GptVersion.GLM_4, label: 'glm-4' },
                { value: GptVersion.GLM_4V ,label: 'glm-4v' },


            ]}
            onChange={(value) => {
                chatStore.updateCurrentSession((session) => {
                    session.config = {
                        ...session.config,
                        gptVersion: value
                    }
                });
            }}
        />
    </div>
}