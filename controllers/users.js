const express = require('express');

function create(req, res, next){
    res.send('Users create(')
}

function list(req, res, next) {
    res.send('Users list');
}


function replace(req, res, next){
    res.send('Users replace')
}

function update(req, res, next){
    res.send('Users update')
}

function destroy(req, res, next){
    res.send('Users destroy')
}

function index(req, res, next){
    res.send('Users index')
}

module.exports = {
    create, list, index, replace, update, destroy
};