var names_of_people = [];
    
function Submit()
{
    var Guest_Name = document.getElementById("guest_name").value;
	names_of_people.push(Guest_Name);
	console.log(Guest_Name);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
   }



function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	}


function sorting()
	{
		names_of_people.sort();           
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function search()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("s1").innerHTML="name found "+found+" Time/s";
	console.log("found name "+found+" Time/s");
}
