MyModel = Backbone.Model.extend({
	initialize:function(){
		this.on("change",function(){
			// console.log(JSON.stringify(this.changed));
			// console.log('Previous attributes: ' + JSON.stringify(this.previousAttributes()));

			if (this.hasChanged('name')) {
				console.log("the name was changed");
			}
		});

		this.on('change:name',function(e){
			console.log("La propiedad name ha cambiado");
		});
	},
	defaults:{
		name:'anthony',
		author:'webster'
	},
	printDetails:function(){
		console.log("Test de funciones: ",this.get('name'));
	},
	validate: function(attrs){
		if(attrs.year< 2000){
			return 'Year must be after 2000';
		}
		if(!attrs.name){
			return 'A name must be provided';
		}
	}
});

var Post = Backbone.Model.extend({
	urlRoot:'http://jsonplaceholder.typicode.com/posts/'
});

var Posts = new Post();

// Posts.fetch({
// 	success:function(model,response,options){
// 		console.log(response);
// 	}
// });

Posts.set('title','Prueba con backbone');

Posts.set('title',"que onda carlos");

Posts.save(Posts.attributes,{
	success:function(model,reponse,options){
		console.log('Model Saved');
		console.log(Posts.attributes);
	},
	error:function(model,xhr,options){
		console.log("Failed to save model");
	}
}); 



