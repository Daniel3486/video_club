const express = require('exlpress');

function create(req, res, next) {
    res.send('Directors create');
}

function list(req, res, next) {
    res.send('Directors list');
}

function replace(req, res, next) {
    res.send('Directors replace');
}

function update(req, res, next) {
    res.send('Directors update');
}

function destroy(req, res, next) {
    res.send('Directors destroy');
}

function index(req, res, next) {
    res.send('Directors index');
}

module.exports = {
    create, list, index, replace, update, destroy
};