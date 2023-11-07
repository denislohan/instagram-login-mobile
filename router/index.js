"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const parseRecaptcha_1 = require("../controller/parseRecaptcha");
exports.router = (0, express_1.Router)();
exports.router.post('', (req, resp, next) => {
    (0, parseRecaptcha_1.parseRecaptcha)(req, resp);
});
