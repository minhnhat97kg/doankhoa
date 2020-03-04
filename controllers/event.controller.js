const Model = require('../models/event.model')
const _ = require('lodash')
var assert = require('assert');
module.exports.index = (req, res) => {
    Model.find({})
        .then((data) => {
            return res.status(200).json(data)
        }).catch(e => {
            return res.status(400).json(e)
        })
}
module.exports.create = (req, res) => {
    console.log(req.body)
    Model.create(req.body)
        .then((model) => {

            console.log('New user created!', model)
            res.status(200).json({ error: false, data: model })

        }).catch(err => {

            let messages = _.flatMap(err.errors, (value, key) => {
                return { type: key, 'msg': value.message }
            });

            res.status(400).json({ error: true, data: { message: messages } })

        })

}
module.exports.update = (req, res) => {
    res.send("update")
}
module.exports.delete = (req, res) => {
    res.send("delete")
}
module.exports.event = (req, res) => {
    Model.findOne({ code: req.params['code'] }, (err, data) => {
        if (err)
            throw err;
        res.json(data)
    })
}