export enum Path {
    Home = "/",
    Chat = "/chat",
    Role = "/role"
}

export enum GptVersion {
    /**
     * 智谱AI 23年06月发布
     * 适用于对知识量、推理能力、创造力要求较高的场景
     */
    CHATGLM_TURBO = "chatglm_turbo",
    /**
     * 智谱AI 24年01月发布
     */
    // 适用于对知识量、推理能力、创造力要求较高的场景
    GLM_3_5_TURBO = "glm-3-turbo",
    // 适用于复杂的对话交互和深度内容创作设计的场景
    GLM_4 = "glm-4",
    // 根据输入的自然语言指令和图像信息完成任务
    GLM_4V = "glm-4v",
    // 根据用户的文字描述生成图像
    COGVIEW_3 = "cogview-3",
}