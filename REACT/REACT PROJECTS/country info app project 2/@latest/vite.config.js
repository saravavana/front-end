export default {
  server:{
    proxy:{
      "/api":{
        target:"https://restcountries.com",
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,"")
      }
    }
  }
}