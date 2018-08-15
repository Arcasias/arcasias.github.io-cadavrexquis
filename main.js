const list = {

	head : [
		
		{
			text : 'en solde',
		},
		{
			text : 'gratuit</e>',
		},
		{
			text : 'à vendre',
		},
		{
			text : 'vendu</e> pour cause de manque de place',
		},
		{
			text : 'perdu</e>',
		},
		{
			text : 'tout</e> neu<f/ve>',
		},
		{
			text : 'à voir au salon des inventeurs',
		},
		{
			text : 'venu</e> de France exprès pour vous',
		},
		{
			text : 'on liquide',
		},
		{
			text : 'garanti</e> pour 2 semaines',
		},
		{
			text : 'vente aux enchères',
		},
		{
			text : 'à mettre dans votre porte-feuille',
		},
		{
			text : 'en rabais',
		},
		{
			text : 'pour mieux vivre, achetez',
		},
		{
			text : 'à ne pas acheter',
		},
		{
			text : 'on a perdu',
		},
		{
			text : 'sur le marché',
		},
		{
			text : 'à jeter',
		},
		{
			text : 'est caché</e> quelque part',
		},
		{
			text : 'on recherche',
		},
		{
			text : 's\'est envolé</e> en fumée',
		},
		{
			text : 'à acheter au magasin du coin',
		},
		{
			text : 'on annonce',
		},
		{
			text : 'est tombé</e> dans l\'égout',
		},
		{
			text : 'a disparu',
		},
		{
			text : 'à vendre au plus offrant',
		},
		{
			text : 'cherchez bien',
		},
		{
			text : 'vendu</e> pour cause de décès',
		},
		{
			text : 'n\'a fait que 2km',
		},
	],
	subject : [

		{
			text : 'un cadavre',
			gender : 'm',
		},
		{
			text : 'un caleçon',
			gender : 'm',
		},
		{
			text : 'une dinette',
			gender : 'f',
		},
		{
			text : 'une aile d\'avion',
			gender : 'f',
		},
		{
			text : 'un élevage de singes',
			gender : 'm',
		},
		{
			text : 'un tram',
			gender : 'm',
		},
		{
			text : 'un nounours',
			gender : 'm',
		},
		{
			text : 'un réveille-matin',
			gender : 'm',
		},
		{
			text : 'un paquebot',
			gender : 'm',
		},
		{
			text : 'une "tutut"',
			gender : 'f',
		},
		{
			text : 'un W.C.',
			gender : 'm',
		},
		{
			text : 'un produit chimique',
			gender : 'm',
		},
		{
			text : 'une voiture de course',
			gender : 'f',
		},
		{
			text : 'un dé à coudre',
			gender : 'm',
		},
		{
			text : 'un jardin plein de pissenlits',
			gender : 'm',
		},
		{
			text : 'une puce précieuse',
			gender : 'f',
		},
		{
			text : 'un planeur',
			gender : 'm',
		},
		{
			text : 'une fusée',
			gender : 'f',
		},
		{
			text : 'un soldat non gradé',
			gender : 'm',
		},
		{
			text : 'une trompette',
			gender : 'f',
		},
		{
			text : 'une bonne d\'enfants',
			gender : 'f',
		},
		{
			text : 'un éléphant',
			gender : 'm',
		},
		{
			text : 'un mexicain',
			gender : 'm',
		},
		{
			text : 'un médecin',
			gender : 'm',
		},
		{
			text : 'une locomotive',
			gender : 'f',
		},
		{
			text : 'un carnet de chèque',
			gender : 'm',
		},
		{
			text : 'un microbe',
			gender : 'm',
		},
		{
			text : 'une lampe de chevet',
			gender : 'f',
		},
		{
			text : 'une cravate',
			gender : 'f',
		},
	],
	end : [

		{
			text : 'éléctrique',
		},
		{
			text : 'de 2 km de long',
		},
		{
			text : 'avec pneu crevé',
		},
		{
			text : 'en papier et en carton',
		},
		{
			text : 'qui est très apétissant</e>',
		},
		{
			text : 'très fragile',
		},
		{
			text : 'qui sonne toutes les 2 minutes',
		},
		{
			text : 'qui coule',
		},
		{
			text : 'très chatouilleu<x/se>',
		},
		{
			text : 'auto-nettoyant</e>',
		},
		{
			text : 'sans visses ni clous',
		},
		{
			text : 'qui donne du fromage',
		},
		{
			text : 'extra-plat</e>',
		},
		{
			text : 'en mille morceaux',
		},
		{
			text : 'qui dit : "papa, maman, oui, non"',
		},
		{
			text : 'de 10cm de volume',
		},
		{
			text : 'qui est tout rose',
		},
		{
			text : 'avec des grosses moustaches',
		},
		{
			text : 'qui fume et qui pue',
		},
		{
			text : 'qui se met dans une valise',
		},
		{
			text : 'd\'où il manque 6 pièces',
		},
		{
			text : 'très noci<f/ve>',
		},
		{
			text : 'en état de décomposition',
		},
		{
			text : 'qui vole',
		},
		{
			text : 'en conserve',
		},
		{
			text : 'qui fait "pouêt pouêt"',
		},
		{
			text : 'avec ou sans embalage',
		},
		{
			text : 'qui va vite',
		},
		{
			text : 'qui ne coûte que 5 francs',
		},
		{
			text : 'blanc</he> avec des pois rouges',
		},
	],
}



$( document ).ready( function() {

	getRandomSentence();

	$( document ).on( 'click', '#new-sentence', getRandomSentence );
} );

function getRandomSentence() {

	// Get random element for each array
	let sentence = {

		head : randArray( list.head ),
		subject : randArray( list.subject ),
		end : randArray( list.end ),
	}

	//Processing
	let headFirst = sentence.head.text.slice( 0, 1 );
	sentence.head.text = headFirst.toUpperCase() + sentence.head.text.slice( 1 );

	let isMale = ( 'm' === sentence.subject.gender );

	Object.keys( sentence ).forEach( part => {

		sentence[ part ].text = sentence[ part ].text.replace( /<[a-z]*\/[a-z]*>/g, x => {

			let exp = x.slice( 1, -1 ).split( '/' );

			return ( isMale ? exp[0] : exp[1] );
		} );
	} )

	// Displaying
	$( '#head' ).html( sentence.head.text );
	$( '#subject' ).html( sentence.subject.text );
	$( '#end' ).html( sentence.end.text );	
}

function randArray( array ) {

	return array[ Math.floor( Math.random() * array.length ) ];
}