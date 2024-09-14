import { userContact } from "../model/userContact.model.js";

const contactUser = async(req, res)=>{
    try {
        const {name, email, phone, message} = req.body;
        if(!name || !email || !phone || !message){
            return res.status(400).json({Message: "All field required"});
        }
        await userContact.create({
            name, 
            email,
            phone, 
            message,
        });
        return res.status(201).json({Message: "Message is successfully send", success: true});
    } catch (error) {
        console.log(error);
        
    }
}
export default contactUser;