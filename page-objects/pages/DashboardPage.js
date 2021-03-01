import {Selector,t} from 'testcafe'

class DashboardPage{
    constructor(){
        this.linktext=Selector('h1')
        this.textsearch=Selector('.rz-datatable-thead [tabindex="1"]:nth-of-type(2) [type]')
        this.testresult=Selector('tr:nth-of-type(1) > td:nth-of-type(2) > .rz-cell-data > .rz-link > .rz-link-text')
        

    }
}




export default DashboardPage