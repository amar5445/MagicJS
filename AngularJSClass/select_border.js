function chooseBorder ()
{
var borderSize = window.prompt('Please select size for table border\n 3( 3 pixel border )\n 5( 5 pixel border )\n 7( 7 pixel border )\n 9( 9 pixel border )\n');
borderSize = parseInt(borderSize); 
switch (borderSize) {
case 3:
createTable(3);
break;
case 5:
createTable(5);
break;
case 7:
createTable(7);
break;
case 9:
createTable(9);
break;
default:
createTable(0);
break;
}
}
function createTable(size)
{ 
var result='<h4>Northern New Jersey Profit</h4>';
	result+='<table border ='+size+'<tr><td>	</td><th>April </th><th>May</th><th>June</th></tr>'; 
	result+='<tr><th>Montclair</th><td>100</td><td>80</td><td>90</td></tr>';
    result+='<tr><th>Clifton</th><td>79</td><td>80</td><td>100</td></tr>';
	result+='<tr><th>Newark</th><td>100</td><td>95</td><td>91</td></tr>';
    result+='</table>'; 
	result+='<h1>Press reload or refresh</h1>';
	document.getElementById( "demo").innerHTML=result;

}
