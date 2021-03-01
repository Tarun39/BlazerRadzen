import {Selector,t} from 'testcafe'

class Notificationpage{
    constructor(){
        this.infobtn=Selector('.btn-info')
        this.commonnotification= Selector('.console-message-text')
        this.warningbtn=Selector('.btn-warning')
        

        

    }

}

export default Notificationpage