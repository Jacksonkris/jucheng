const proxy = require("http-proxy-middleware");

module.exports = (app) =>{
    app.use("/home",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true
    }))
}
