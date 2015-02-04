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

Model = new MyModel({name:'carlos'});

Model.set('year', 1999, {validate: true});

console.log('Check year change: ' + Model.get('val'));


// var clone = Model.clone();

// console.log("verificando si existe una propiedad:",Model.has('lastname'));
// console.log(Model.attributes);
// console.log(clone.attributes);

//Model.printDetails();

// Model.set('name','Different Book'); //change handler invoked

// Model.set('name', 'Different Book', {silent:true});//no change handler invoked 


$(function(){
	var i=0;
	$('h1').on('click',function(){
		i++;
		Model.set('testering'+i,i);
		console.log(Model.attributes);
	});
})



