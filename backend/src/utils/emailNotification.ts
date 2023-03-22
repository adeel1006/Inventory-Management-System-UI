import * as nodemailer from 'nodemailer';


export const notify = (email: string, subj : string, txt : string) =>{
    
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'abdullah.shahzad@gigalabs.co',
            pass: 'txancqknqojldumi',
          },
        });
    
        let info = {
          from: '"Abdullah"',
          to: email,
          subject: subj,
          text: txt,
        };
    
        return transporter.sendMail(info);
}