var _ = require('lodash');

var config = {
    "env"         : "development",//当前的开发环境
    "shared"      : {
        "session_key"   : "xid",
        "per_page_count": 20,
        "cookie_secret" : "输入站点cookie的密钥"
    },
    "development" : {
        "name"               : "development",
        "port"               : 8888,
        "host"               : "127.0.0.1",
        "base_url"           : "http://127.0.0.1:8888",
        "mongo_server"       : "输入你本机的mongodb数据库链接字符串，如：mongodb://127.0.0.1/ngnice",
        "errorHandlerOptions": {
            "dumpExceptions": true,
            "showStack"     : true
        },
        passport             : {
            weibo: {
                authorizationURL: "https://api.weibo.com/oauth2/authorize",
                tokenURL        : "https://api.weibo.com/oauth2/access_token",
                clientID        : "xxx",
                clientSecret    : "xxx",
                callbackURL     : "xxx"
            }
        }
    },
    "production"  : {
        "name"               : "production",
        "port"               : 18080,
        "host"               : "www.ngnice.com",
        "base_url"           : "http://www.ngnice.com",
        "mongo_server"       : "输入开发环境的mongodb数据库链接字符串",
        "errorHandlerOptions": {
            "dumpExceptions": false,
            "showStack"     : false
        },
        passport             : {
            weibo: {
                authorizationURL: "https://api.weibo.com/oauth2/authorize",
                tokenURL        : "https://api.weibo.com/oauth2/access_token",
                clientID        : "xxxx",
                clientSecret    : "xxxx",
                callbackURL     : "xxxx/auth/weibo/callback"
            }
        }
    },
    "site_scripts": [
        "lib/jquery/1.11.0/jquery.js", "lib/bootstrap/3.1.1/js/bootstrap.js", "lib/bootstrap/notify/1.0.0/js/bootstrap-notify.js",
        "lib/angular/1.2.16/angular.js", "lib/w5cValidator/2.0.0/w5cValidator.js",
        "lib/angular-ui/ui-bootstrap/0.9.0/ui-bootstrap-tpls.js",
        "lib/highlight/8.0/highlight.pack.js",
        "lib/lodash/2.4.1/lodash.js", "lib/marked/0.3.2/marked.js", "lib/moment/2.6.0/moment.js",
        "js/main.js", "js/service/service.js", "js/filter/filter.js", "js/directive/directive.js",
        "js/controller/user.js", "js/controller/post.js", "js/controller/home.js", "js/status.js"]
};

var exports = _.extend({}, config.shared, config[config.env]);
exports.site_scripts = config.site_scripts;
exports.env = config.env;
module.exports = exports;