var mongoose = require('mongoose');
var Warlock = mongoose.model('warlock');

exports.findAllWarlocks = function (req, res) {
    Warlock.find(function (err, warlocks) {
        if (err)
            res.send(500, err.message);

        console.log('GET /warlocks');
        res.status(200).jsonp(warlocks);
    });
};

exports.findWarlock = function (req, res) {
    Warlock.findById(req.params.id, function (err, warlock) {
        if (err)
            return res.send(500, err.message);
        console.log('GET /warlock/' + req.params.id);
        res.status(200).jsonp(warlock);
    });
};

exports.addWarlock = function (req, res) {
    console.log('POST');
    console.log(req.body);
    var warlock = new Warlock({
        name: req.body.name,
        birthdate: req.body.birthdate,
        lastname: req.body.lastname,
        school: req.body.school,
        sex: req.body.sex,
        health: req.body.health,
        magic: req.body.magic,
        strength: req.body.strength
    });

    warlock.save(function (err, warlock) {
        if (err)
            return res.send(500, err.message);
        res.status(200).jsonp(warlock);
    });
};

exports.updateWarlock = function (req, res) {
    Warlock.findById(req.params.id, function (err, warlock) {
        warlock.name = req.body.name;
        warlock.birthdate = req.body.birthdate;
        warlock.lastname = req.body.lastname;
        warlock.school = req.body.school;
        warlock.sex = req.body.sex;
        warlock.health = req.body.health;
        warlock.magic = req.body.magic;
        warlock.strength = req.body.strength;
        warlock.save(function (err) {
            if (err)
                return res.send(500, err.message);
            res.status(200).jsonp(warlock);
        });
    });
};

exports.deleteWarlock = function (req, res) {
    Warlock.findById(req.params.id, function (err, warlock) {
        warlock.remove(function (err) {
            if (err)
                return res.send(500, err.message);
            res.status(200);
        });
    });
};
