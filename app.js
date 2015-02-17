
var Post = Backbone.Model.extend({
	urlRoot:'http://jsonplaceholder.typicode.com/posts',
	parse: function(response,xhr){
		response.title = 'prueba';
		return response;
	}
});


var Page = Backbone.Collection.extend({
	model:Post,
	url:'http://jsonplaceholder.typicode.com/posts',
	wait:true,
});

var bookOne = new Post({name: 'Beginning Backbone', author: 'James Sugrue', year: 2013});

var bookTwo = new Post({name: 'Pro Javascript Design Patterns', author:'Dustin Diaz',year: 2012});

MyPage = new Page([bookOne,bookTwo]);

MyPage.fetch();

postviews = Backbone.View.extend({
	collection:MyPage,

	tagName:'li',
		
	attributes:{'data-date':new Date()},
	
	initialize:function() {this.render(this)},
	
	render:function(_this){

		test = {hola:"query"};
		
		_.forEach(this.collection,function(value,key,context,context){
			// $(this.el).append('<li>'+context.at(key).get('name')+'</li>');
			console.log(_this.el,this);
		});
		
		// this.$el.html("<li>hola</li>");

		return this;
	}

});

myView = new postviews();

console.log(myView.el);






