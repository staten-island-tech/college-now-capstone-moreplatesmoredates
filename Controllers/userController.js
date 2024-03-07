const userAccount = require("../Models/schemas.js");



//create an account using the schema for user accounts
exports.createAccount = async (req, res)=>{
    try {
        const account = new userAccount(req.body);
        await account.save();
        res.json(`You have registered for an account as ${account}`);
    } catch (error) {
        res.status(500).json(error);
    };
};

//get all of the accounts from the MongoDB database
exports.getAccounts = async (req, res)=>{
    try {
        const accounts = await userAccount.find();//.limit(10);
        res.json(accounts);
    } catch (error) {
        console.log(error);
    };
};

//update account username/email/password
exports.updateAccount = async (req, res)=>{
    try {
        //maybe use username/emai instead?
        const account = await userAccount.findById(req.params.id);
        const updates = Object.keys(req,body);
        updates.forEach(update => account[update] = req.body[update]);
        await account.save();
        res.json(shop);
    } catch (error) {
        console.log(error);
    };
};

//delete an account
exports.deleteAccount = async (req, res)=>{
    try {
        const account = await userAccount.findByIdAndDelete(req.params.id);
        if (!account){
            res.status(404).send();
        }
        res.json(`${account} was deleted`);
    } catch (error) {
        console.log(error);
    };
};