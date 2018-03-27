var obj = {
	className: 'open menu menu'
};
var arr = [5, 3, 8, 1, 19, 12, 222, 2];
var strArr = ["HTML", "JavaScript", "CSS"];

function addClass(obj, cls) {
	var arr = obj.className.split(' ');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == cls) return;
	}
	arr.push(cls);
	obj.className = arr.join(' ');
}

function camelize(str) {
	var arr = str.split('-');
	for (var i = 1; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join('');
}

function removeClass(obj, cls) {
	var arr = obj.className.split(' ');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == cls) {
			arr.splice(i, 1);
			i--;
		}
	}
	obj.className = arr.join(' ');
}

function filterRangeInPlace(arr, a, b) {
	if(a>b){
		a+=b;
		b=a-b;
		a=a-b;
	}
	for (var i = 0; i < arr.length; i++) {
		var val = arr[i];
		if (val < a || val > b) {
			arr.splice(i--, 1);
		}
	}
}

function compareRevers(a, b) {
	if (a > b) return -1;
	if (a < b) return 1;
}

function reverseSort(arr){
	arr.sort(compareRevers);
}

function arraySort(arr){
	var arraySort = arr.slice().sort();
	return arraySort;
}

function compareRandom(a, b){
	return Math.random() - 0.5;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

function compareAge(firstPeople, secondPeople) {
	if (firstPeople.age > secondPeople.age) return 1;
	if (firstPeople.age < secondPeople.age) return -1;
}

function sortByAge(arr){
	arr.sort(compareAge);
}

var list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

function printList(list) {
	while(list) {
		alert( list.value );
		list = list.next;
	}
}

function printListRec(list) {
	alert( list.value );
	if (list.next) {
		printListRec(list.next);
	}
}

function printReverseListRec( list ){
	if (list.next) {
		printReverseListRec(list.next);
	}
	alert( list.value );
}

function printReverseList( list ){
	var arr = [];
	while (list) {
		arr.push(list.value);
		list = list.next;
	}
	for (var i = arr.length - 1; i >= 0; i--) {
		alert( arr[i] );
	}
}

var strings = ["C++", "C#", "C++", "C#", "C", "C++", "JavaScript", "C++", "JavaScript"];

function unique(arr) {   
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		var str = arr[i];
		obj[str] = true;
	}
	return Object.keys(obj);
}