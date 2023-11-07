"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRecaptcha = void 0;
const axios_1 = __importDefault(require("axios"));
const parseRecaptcha = (req, resp) => {
    const { token } = req.body;
    console.log('token', req.params);
    console.log('token', req.body);
    console.log('token', process.env.recaptcha_secret_key);
    (0, axios_1.default)({
        method: 'post',
        url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.recaptcha_secret_key}&response=${token}`,
    })
        // axios.post('http://www.google.com/recaptcha/api/siteverify',[{secret:process.env.recaptcha_secret_key, response:token}])
        .then(function (response) {
        console.log(response.data);
        resp.send(response);
    })
        .catch(function (error) {
        resp.send(error);
    });
};
exports.parseRecaptcha = parseRecaptcha;
