import DataCommand from "./DataCommand"
import DataMediator from "./DataMediator";
import DataProxy from "./DataProxy";
/**
 * pureMVC 框架Demo
 * facade 全局控制类
 */
export default class ApplicationFacade extends puremvc.Facade {
    public constructor(gameRoot: cc.Node) {
        super();
        this.registerCommand("Reg_StartDataCommand", DataCommand);
        this.registerMediator(new DataMediator(gameRoot));
        this.registerProxy(DataProxy.getInstance());
    } 
}
