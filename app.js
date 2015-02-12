
var Post = Backbone.Model.extend({
	urlRoot:'http://jsonplaceholder.typicode.com/posts',
	parse: function(response,xhr){
		response.title = 'prueba';
		return response;
	}
});


var Posts = new Post();

$('.add-post').on('click',function(){

	
	Posts.set('title','Prueba con backbone');

	Posts.save(Posts.attributes,{
		success:function(model,reponse,options){
			console.log('Model Saved');
			console.log(Posts.attributes);
		},
		error:function(model,xhr,options){
			console.log("Failed to save model");
		}
	}); 
})


// Posts.fetch({
// 	success:function(model,response,options){
// 		// console.log(response);
// 	}
// });



var Page = Backbone.Collection.extend({
	model:Post,
	url:'http://jsonplaceholder.typicode.com/posts',
	wait:true,
});

Posts1 = new Post({'title':'primer array'});
Posts2 = new Post({'title':'primer array'});
Posts3 = new Post({'title':'primer array'});


var data = [
{'title':'hola'}
];

MyPage = new Page;

// MyPage.add([Posts1,Posts2]);

// MyPage.add([{name: "Flying Dutchman"},
//   {name: "Black Pearl"}]);

MyPage.fetch({
	success:function(model,response,options){
		console.log(model);
	},
});

// MyPage.remove(Posts3);

console.log(MyPage);




