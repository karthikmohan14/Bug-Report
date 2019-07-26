var answer=[
{"name":"Harishankar","date":"7-22-2019","body":"This is my answer","image":"image.jpg"},
{"name":"Neeraj","date":"7-22-2019","body":"This is my answer","image":"image.jpg"},
{"name":"Karthik","date":"7-22-2019","body":"This is my answer","image":"image.jpg"},
];
for (var i=0;i<answer.length;i++)
{
	var html='<div class="answerBox"><div class="imageLeft"><img src='+answer[i].image+' alt="user image" width="100px" height="100px"/></div><div class="dataRight"><span>'+answer[i].name+'</span><div class="date">'+answer[i].date+'</div><p>'+answer[i].body+'</p></div><div class="clear"></div></div> ';  
	$('#container').append(html);
}

// function render(data){
// 	var html='<div class="answerBox"><div class="imageLeft"><img src="image.jpg" alt="user image" width="100px" height="100px"/></div><div class="dataRight"><span>'+data.name+'</span><div class="date">'+data.date+'</div><p>'+data.body+'</p></div><div class="clear"></div></div> ';  
// 	$('#contianer').append(html);
// }

// $(document).ready(function(){
// 	var answer=[
// {"name":"Harishankar","date":"7-22-2019","body":"This is my answer"},
// ];
// for (var i=0;i<answer.length;i++)
// {  
// 	render(answer[i]);
// }
// $('#addAnswer').click(function(){
// 	var addObj={
// 		"name":$('#name').val(),
// 		"date":$('#date').val(),
//         "body":$('#bodyText').val()
// 	};
// 	answer.push(addObj);
// 	render(addObj);
// })
// })
