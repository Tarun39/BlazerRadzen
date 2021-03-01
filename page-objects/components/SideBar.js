import {Selctor,Selector,t} from 'testcafe'

class SideBar{
    constructor(){
        //this.generalTabtext=Selector('#MpyPNj2kBk > ul > li:nth-child(5) > div > div > span')
        //this.generalLinktext=Selector('#MpyPNj2kBk > ul > li:nth-child(5) > ul > li:nth-child(1) > div > a > span')
        this.sideMenu=Selector('.rz-panel-menu > .rz-navigation-item:nth-of-type(6) > .rz-navigation-item-wrapper:nth-of-type(1) .rz-navigation-item-link')
        this.dashboardMenu=Selector('[href="\/dashboard"]')
    }
}


export default SideBar