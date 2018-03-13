var express =require('express');
var app=express();
//app.use(express.static('public'));//get post를 하기 전에 여기로 들어옴. static파일에 대한 요청이 오면 middleware가 처리를 함.
app.use(function(req,res,next){
	console.log('Time:',Date.now());
	next();
});
app.get('/',function(req,res){
	res.send('Hello World~!')
});

app.listen(3000,function(){
	console.log('Example app listening on port 3000!')
});