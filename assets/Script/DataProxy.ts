import MyData from "./MyData"
/**
 * 模型层
 * 数据代理类
 */
export default class DataProxy extends puremvc.Proxy {
    public proxyName = "DataProxy";
    private MyData: MyData = null;
    private static instance: DataProxy = null;

    public static getInstance() {
        if(!this.instance) {
            this.instance = new DataProxy();
        }
        return this.instance;
    }

    constructor() {
        super();
        puremvc.Proxy.NAME = "DataProxy";
        this.MyData = new MyData();
    }

    public AddLevel(addNumber: number) {
        this.MyData.Level += addNumber;
        this.sendNotification("Msg_AddLevel", this.MyData);
    }
}
