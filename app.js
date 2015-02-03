MyModel = Backbone.Model.extend({
	initialize:function(){
		this.on("change",function(){
			console.log("model changed");
		});
	},
	defaults:{
		name:'anthony',
		author:'webster'
	},
	printDetails:function(){
		console.log("Test de funciones: ",this.get('name'));
	}
});

Model = new MyModel({name:'carlos'});

Model.set('name','anthony');
Model.set('year',2014);

var clone = Model.clone();

// console.log("verificando si existe una propiedad:",Model.has('lastname'));
// console.log(Model.attributes);
// console.log(clone.attributes);

//Model.printDetails();


$(function(){
	var i=0;
	$('h1').on('click',function(){
		i++;
		Model.set('testering'+i,i);
		console.log(Model.attributes);
	});
})



