import MyData from "./MyData"
export default class DataMediator extends puremvc.Mediator {
    public mediatorName = "DataMediator";
    private text: cc.Label;
    private btn : cc.Button;

    constructor(root: cc.Node) {
        super();
        this.text = root.getChildByName("label").getComponent(cc.Label);
        this.btn  = root.getChildByName("addNum").getComponent(cc.Button);

        this.btn.node.on('click', this.clickCallBack, this);
        
    }

    clickCallBack() {
        this.sendNotification("Reg_StartDataCommand");
    }

    public listNotificationInterests() {
        let list: Array<string> = [];
        list.push("Msg_AddLevel");
        return list;
    }

    public handleNotification(notification: puremvc.INotification) {
        switch(notification.getName()) {
            case "Msg_AddLevel": 
                let data: MyData = notification.getBody();
                this.text.string = "" + data.Level;
            break;
        }
    }

    
}
