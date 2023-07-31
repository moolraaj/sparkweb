const userModel=require('../model/UserModel.js')
require('../config/db.js')
exports.postUser=async (req,resp)=>{
const nodemailer=require('nodemailer')

const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sparkweb995@gmail.com',
        pass:'mkljexesxoawcnap'
    },
}) 

    let data=new userModel(req.body)
    let result=await data.save()
    const userMailOptions={
        from:'sparkweb995@gmail.com',
        to:`${data.email}`,
        subject:'job regarding',
        text:`Thankyou your informations has been successfully sent to the sparkweb solution`,
    };

    const adminMailOption={

        from:`${data.email}`,
        to:'sparkweb995@gmail.com',
        subject:'sms body',
        text: `
        name: ${data.name}\n
        email: ${data.email}\n
        phone: ${data.phone}\n
        message: ${data.message}\n
         ` 
    };

    transport.sendMail(userMailOptions,function(err,info){
        if (err) {
            console.log(err);
            resp.status(500).json({ error: 'Failed to send email' });
          } else {
            console.log('Email has been sent:', info);
            resp.json({ message: 'Email sent successfully' });
          }
        });

  

    transport.sendMail(adminMailOption,function(err,info){
        if (err) {
            console.log(err);
            resp.status(500).json({ error: 'Failed to send email' });
          } else {
            console.log('Email has been sent:', info);
            resp.json({ message: 'Email sent successfully' });
          }

    })



    console.log(result)
    resp.send(result)

}

exports.getUser=async (req,resp)=>{

    let data=await userModel.find()
    resp.send(data)
    console.log(data)
}
// gmail pass mkljexesxoawcnap

