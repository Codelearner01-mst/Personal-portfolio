const emailJsData = {
    options: {
        publicKey: 'Th40UQE9TDrs5eI93',
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            list: ['foo@emailjs.com', 'bar@emailjs.com'],
            // The variable contains the email address
            watchVariable: 'email',
        },
        limitRate: {
            // Set the limit rate for the application
            id: 'contact',
            // Allow 1 request per 30s
            throttle: 30000,
        },
    },
    serviceID: "service_rz6sc6g",
    templateID: "template_kbdvoqj"
}
export default emailJsData