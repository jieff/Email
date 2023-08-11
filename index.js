const express = require("express");
require("dotenv").config();
const SibApiV3Sdk = require('sib-api-v3-sdk');
const htmlContent = require("./templates/template");
const app = express();

app.use(express.json());

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.EMAIL_API_KEY;

app.post('/email', async (req, res) => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sender = {
        email: process.env.EMAIL,
        name: process.env.EMAIL_NAME,
    };

    const receivers = [
        {
            email: req.body.email,
        },
    ];

    try {
        const sendMail = await apiInstance.sendTransacEmail({
            sender,
            to: receivers,
            subject: "Test Email From Brevo",
            textContent: "Test Email",
            htmlContent,
        });
        
        return res.send(sendMail);
    } catch (error) {
        console.log(error);
        return res.send(error);   
    }
});

app.listen("3000", () => {
    console.log("server started");
});
