const express = require("express");
const router = express.Router();
const htmlContent = require("../templates/template");
const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.EMAIL_API_KEY;

router.post('/email', async (req, res) => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sender = {
        email: process.env.EMAIL_REMITTER,
        name: process.env.EMAIL_NAME,
    };

    const receivers = [
        {
            email: req.body.recipient,
        },
    ];

    try {
        const sendMail = await apiInstance.sendTransacEmail({
            sender,
            to: receivers,
            subject: req.body.subject,
            textContent: req.body.content,
            htmlContent,
        });
        
        return res.send(sendMail);
    } catch (error) {
        console.log(error);
        return res.send(error);   
    }
});

module.exports = router;