
import Sidebar from '../page-objects/components/SideBar'
import DashboardPage from '../page-objects/pages/DashboardPage'


const sidebar = new Sidebar()
const dashboardpage = new DashboardPage()

fixture `Dashboard Page Functional Testing`
    .page `https://blazor.radzen.com/dashboard`
    .beforeEach(async t =>{
        await  t.setTestSpeed(0.1)
        await t.setPageLoadTimeout(0)
    })

test('Verify the user is redirected on Dashboard Page', async t => {
   
    await t.expect(dashboardpage.linktext.innerText)
    .contains('Blazor GitHub Issues')

})

test('Verify the side menu ', async t => {
    await t.click(sidebar.sideMenu)
    await t.click(sidebar.dashboardMenu)

})

test('verify the search functionality on the Issue list setion on Dashboard',async t =>{
    await t.typeText(dashboardpage.textsearch,'test')
  await t.expect(dashboardpage.testresult.innerText).contains('test')

})

    
 
