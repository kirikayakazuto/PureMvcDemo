import DataProxy from "./DataProxy"

/**
 * 控制层
 * 接收玩家的输入 或者 视图层发来的数据
 */
export default class DataCommand extends puremvc.SimpleCommand {
    
    public execute(notification: puremvc.INotification) {
        let dataPro = puremvc.Facade.getInstance().retrieveProxy(DataProxy.NAME) as DataProxy;
        dataPro.AddLevel(10);
    }
}
