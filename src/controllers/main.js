const {render} = require('ejs');
const Task = require('../models/task');

exports.home = async (req,res) =>{
    const tasks = await Task.find();
    res.render('index',{
        title: 'Crud NodeJS MongoDB',
        tasks //tasks: tasks
    })
}

exports.insert = async (req,res) =>{
    res.render('insert',{
        title: 'Crud NodeJS MongoDB',
    })
}
exports.add = async (req,res) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
}

exports.delete = async (req,res) => {
    const {id} = req.params;
    await Task.remove({_id:id});
    res.redirect('/');
}

exports.done = async (req,res) =>{
    const {id} = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
}

exports.edit = async (req,res) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('edit',{
        title: 'Crud NodeJS MongoDB',
        task
    });
}

exports.update = async (req,res) => {
    const {id} = req.params;
    await Task.update({_id:id},req.body);
    res.redirect('/');
}