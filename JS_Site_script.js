function ShowMore() 
{

  document.getElementById('link').remove('link');
  document.getElementById('More').style.display = "block";

}

function ClickChange() 
{
	var Image_Id = document.getElementById('imgs');
	if (Image_Id.src.match("Dark0.gif"))
	{	
		Image_Id.src = "Dark1.gif";
	}
	else 
	{
		Image_Id.src = "Dark0.gif";
	}

}
