function doSubmit()
{
	var time 			= new Date().getHours();
	var min 			= new Date().getMinutes();
	var firstname 		= document.getElementById("name").value;
	var major 			= document.getElementById("major").value;
	var startyear		= document.getElementById("year").value;
	var check = true;
	var message = "";
	if (docheck())
	{
	document.getElementById("records").innerHTML += "<br />"+time+":"+min+",  "+firstname+ ",   "+major+",  "+startyear;
	document.Studentrecord.name.value=" ";
	document.Studentrecord.major.value=" ";
	document.Studentrecord.year.value=" ";
	}
	return;
}
function docheck()
{
	var check = true;
	var message = "";
	var firstname=document.Studentrecord.name.value;
	var major=document.Studentrecord.major.value;
	var startyear =document.Studentrecord.year.value;
	if (startyear <= 2000 )
		{
		check = false;
		message += "unacceptable year!! Please enter start year less than 2000.\n";
		}
	if (firstname.length==1)
		{	
		check = false;
		message += "Name should not be null!!.\n";
		}
	if(major.length==1)
		{
		check = false;
		message += "Major should not be null!!.\n";
		}
	if (!check)
		{
		alert(message);
		}
		return check;
}
