
import NotificationPage from '../page-objects/pages/NotificationPage'

const notificationpage = new NotificationPage

fixture `Notification Page Functional Testing`
    .page `https://blazor.radzen.com/notification`
    .beforeEach(async t =>{
        await  t.setTestSpeed(0.1)
        await t.setPageLoadTimeout(90000)

    })

    test('user can click on info button',async t =>{
       
       await t.click(notificationpage.infobtn)
        await t.expect(notificationpage.commonnotification.innerText).contains('Info notification')

    })

    test('user can click on warning buttone',async t =>{
        await t.click(notificationpage.warningbtn)
        await t.expect(notificationpage.commonnotification.innerText).contains('Warning notification')
    })