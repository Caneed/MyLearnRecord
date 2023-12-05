class Streamer {
    // 状态值
    private state: 'streaming' | 'rest'
    private followers: Array<Followers>

    /**
     * 获取状态值
     * @returns 状态值
     */
    public get getState() {
        return this.state
    }
    /**
     * 设置状态值的时候(发布的时候)调用通知方法，通知订阅者更新
     * @param state 状态
     */
    public setState(state: 'streaming' | 'rest') {
        this.state = state
        this.notify()
    }

    /**
     * 通知订阅者更新状态
     */
    public notify() {
        this.followers.forEach((follower: Followers) => {
            follower.update()
        })
    }
}

class Followers {
    public update() {

    }
}