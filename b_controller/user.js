/**
 * Created by SeungHoShin on 2017. 7. 21..
 */


exports.read = function(){

}
exports.write = function(){

}
exports.update = function(){

}
exports.delete = function(){

}
exports.send = function(response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end("USER");
}