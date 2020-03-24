
function addInfo(id, myinfo)
{
	var tr, td1, td2, td3, branch, sectionName, session;
	mainElement = document.getElementById(id);
	for(i=0; i<myinfo.length; i++)
	{
		tr = document.createElement("tr"); 	
		td1 = document.createElement("td");
		td2 = document.createElement("td");
		td3 = document.createElement("td");
		
		
		branch = document.createTextNode(myinfo[i].branch);
		sectionName = document.createTextNode(myinfo[i].sectionName);
		session = document.createTextNode(myinfo[i].session);
		
		td1.appendChild(branch);
		td2.appendChild(sectionName);
		td3.appendChild(session);
		
		if(i%2==0)
		{
			td1.style.backgroundColor="lightgray";
			td2.style.backgroundColor="lightgray";
			td3.style.backgroundColor="lightgray";
		}
		
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		mainElement.appendChild(tr);
	}
}


function hamidSearch(id, myinfo,id2)
{
	var arr = [];
	var x = document.getElementById(id).value.toLowerCase();
	for(i=0; i<myinfo.length; i++)
	{
		if(myinfo[i].branch.toLowerCase().indexOf(x)>=0 || myinfo[i].sectionName.toLowerCase().indexOf(x)>=0 || myinfo[i].session.toLowerCase().indexOf(x)>=0)
		{
			arr.push({branch:myinfo[i].branch, sectionName:myinfo[i].sectionName, session:myinfo[i].session});
		}
	}
	var table = document.getElementById(id2);
	var Len = table.childNodes.length;
	for(i=2;i<Len; i++)
		table.removeChild(table.childNodes[2]);
	this.addInfo(id2, arr);
}




