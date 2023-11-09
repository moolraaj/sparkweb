const userModel = require('../model/UserModel.js');
require('../config/db.js');
const nodemailer = require('nodemailer');
exports.postUser = async (req, resp) => {
   

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sparkweb995@gmail.com',
            pass: 'mkljexesxoawcnap'
        }
    });

    try {
        let data = new userModel(req.body);
        let result = await data.save();

        const userMailOptions = {
            from: 'sparkweb995@gmail.com',
            to: `${data.email}`,
            subject: 'job regarding',
            text: 'Thank you, your information has been successfully sent to Sparkweb Solution.'
        };

        const adminMailOption = {
            from: `${data.email}`,
            to: 'sparkweb995@gmail.com',
            subject: 'sms body',
            text: `
            name: ${data.name}
            email: ${data.email}
            phone: ${data.phone}
            message: ${data.message}
            `
        };

        await transport.sendMail(userMailOptions);
        await transport.sendMail(adminMailOption);

        console.log(result);
        resp.json({ message: 'Data saved and emails sent successfully', result });
    } catch (error) {
        console.error(error);
        resp.status(500).json({ error: 'An error occurred while processing your request' });
    }
};

exports.getUser = async (req, resp) => {
    try {
        let data = await userModel.find();
        resp.send(data);
        console.log(data);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ error: 'An error occurred while fetching user data' });
    }
};
