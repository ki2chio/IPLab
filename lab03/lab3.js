addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'start');
alert(obj.className);


alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") ); 

removeClass(obj, 'asdaasdawadas');
removeClass(obj, 'menu')
alert(obj.className)

filterRangeInPlace(arr, 4, 1);
alert( arr );

reverseSort( arr );
alert( arr );

var arrSorted = arraySort( strArr );
alert( arrSorted );
alert( strArr );

arr.sort(compareRandom);
alert( arr );

sortByAge(people);
for(var i = 0; i < people.length; i++) {
  alert(people[i].name);
}

printList( list );

printListRec( list );

printReverseListRec( list );

printReverseList( list );

alert( unique(strings) );