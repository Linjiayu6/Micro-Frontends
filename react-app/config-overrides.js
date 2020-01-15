// 拓展webpack

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  
  config.output.library = "reactApp"
  config.output.libraryTarget = "window"
  console.log(config, env)
 
  return config;
}