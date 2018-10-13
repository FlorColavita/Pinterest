//Consigna:crear una función constructora llamada User que tenga las siguientes propiedades privadas: userId (Integer), username (string), name (string), surname(string) y posts (array). Asimismo debe contar con un metodo publico para obterner todos los posts del usuario.//
const User = (_id, _username) => {
	//para que las variables de adentro sean privadas (quedan encapsuladas aca) y no exponga estas variables//
	const id = _id;
	const username = _username;
	const posts = [];

	const getPosts = () => posts;
	const addPost = (newPost) => posts.push(newPost);
//Usar template strings(Interpolación-Multiline_Stringcomofunciones)para obtener el nombre de usuario junto con la cantidad the posts que publicó.//
	const getUserAndPosts = () => `${username} (${posts.length})`;

//voy a devolver un Objeto con funciones adentro//
	return { getPosts, addPost };
};

const double = (numbers) => numbers.ma((n) => n*2);
console.log(double([1, 2, 3]));

//const newArray = numbers;//

//No muy usado:  const myArray = [1, 2, 3,, 4, 5];
               //myArray.forEach((element) => newArray.push(element));//

//const myArray = [1, 2, 3,, 4, 5, 6];//
//console.log(myArray.filter((n) => n % 2 === 0));//

const users = [{
	id: 1,
	username: 'julian'
}, {
	id: ,
	username: 'lucas'
	}, {
	id: 3,
	username: 'jorge'
}];

users.filter((u, index, array) => u.id === 2);

//Metodos de Array para control de flujo:
//some (chequea por verdadero)
users.some((u) => u.id === 2);
//every (al contrario del anterior, chequea por falso. Te devuelve verdadero si todos cumplen la condicion)
users.every((u) => u.id < 4);
//includes (tambien devuelve v o f pero es como el punto medio, ya que le pasamos el elemento exacto que quiero encontrar)
users.includes({id: 2, username: 'lucas'});

//Metodos de Objets (de prototipo):
//keys (facilitador, forma de recorrer un objeto)
Object.keys({ a: 'aaa', b: 'bbb', c: 'ccc'});
Object.keys(obj).forEach((key) => {
});
//values
Object.values(obj).forEach((key) => {
});
//reduce
const allUsersnames = users.reduce((acc, user) => {
	return `${acc}${user.username}`;
}, '');

//const numbers = [1, 2, 3, 4, 5, 6];
//const sum = numbers.reduce((acc, n) => acc + n);

const myUser = User(1, 'julian');
myUser.addPost('mi nuevo post');
console.log(myUser.getPosts());
