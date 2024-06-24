import mongoose from 'mongoose';
const {Schema , model} = mongoose;
const userDataSchema = new Schema({
    Name:String,
    Email:String,
    password:String
});
const newUser = model('User', userDataSchema);
export default newUser;