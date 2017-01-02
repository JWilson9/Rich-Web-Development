function myFunction() {
	    


		var sections = document.getElementsByTagName('p');
		var headings = document.getElementsByTagName('h1');

		for(var i = 0; i < sections.length; i++)
		{
		    var s = sections[i].innerHTML;
		    s = s.replace('defeasible', '<span style="background-color:yellow;font-weight: bold;">defeasible</span>');
		    s = s.replace('Defeasible', '<span style="background-color:yellow;font-weight: bold;">Defeasible</span>');
		    sections[i].innerHTML = s;
		}
		for(var i = 0; i < headings.length; i++)
		{
		    var s = headings[i].innerHTML;
		    s = s.replace('defeasible', '<span style="background-color:yellow;font-weight: bold;">defeasible</span>');
		    s = s.replace('Defeasible', '<span style="background-color:yellow;font-weight: bold;">Defeasible</span>');
		    headings[i].innerHTML = s;
		}

	}


	function showhide1()
	{
		var div = document.getElementsByTagName("section");


		for(var i = 0; i < div.length; i++)
		{
		   // var s = div[i].innerHTML;

		    if (div[i].style.display !== "none") 
			{
				div[i].style.display = "none";
			}
			else 
			{
				div[i].style.display = "block";
			}
		}
		   
		
	}

	function part3() {
    var aTags = document.getElementsByTagName('a'),
        atl = aTags.length,
        i;

	    for (i = 0; i < atl; i++) {
	        
	            /*if (true) { // your condition to disable previous
	                aTags[i].style.visibility = "hidden";
	            } else {
	                aTags[i].style.visibility = "visible";
	            }*/
	        if (aTags[i].style.visibility !== "hidden") 
			{
				aTags[i].style.visibility = "hidden";
			}
			else 
			{
				aTags[i].style.visibility = "visible";
			}
	        
	        
	}