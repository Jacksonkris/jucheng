const proxy = require("http-proxy-middleware");

module.exports = (app) =>{
    app.use("/home",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true
    }))

    app.use("/Show",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true
    }))

    app.use("/theatre",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true
    }))

    app.use("/Schedule",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true
    }))

    app.use("/Search",proxy({
        target:"https://m.juooo.com",
        changeOrigin:true
    }))

    app.use("/ajax",proxy({
        target:"http://39.105.204.151:3000",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}

