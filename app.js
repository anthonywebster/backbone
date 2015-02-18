
var Post = Backbone.Model.extend({
	urlRoot:'http://jsonplaceholder.typicode.com/posts'
});


var PageCollection = Backbone.Collection.extend({
	model:Post,
	url:'http://jsonplaceholder.typicode.com/posts',

});

var postviews = Backbone.View.extend({
 	
	el:'.list',
		
	attributes:{'data-date':new Date()},
	
	initialize:function() {
		this.render();
		this.listenTo(this.collection,'add',this.log)		
	},

	events:{
		'click .name' : 'log'
	},
	
	render:function(){
			
		_.forEach(this.collection,function(value,key,context){
			
			this.$el.append('<li class="name">'+context.at(key).get('title')+'</li>');			
		 },this);

		return this;
	},

	log:function(e) {
		console.log(this);
	}

});

MyPage = new PageCollection();

MyPage.fetch({
	success:function(model,response,options){
		
		myView = new postviews({collection:model});
	}
});

var bookTwo = new Post({title: 'Pro Javascript Design Patterns', author:'Dustin Diaz',year: 2012});

MyPage.add(bookTwo);



