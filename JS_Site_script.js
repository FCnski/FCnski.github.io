function ShowMore() 
{

  document.getElementById('link').remove('link');
  document.getElementById('More').style.display = "block";

}

function ClickWolf() 
{
	var Image_Id = document.getElementById('Wolf');
	if (Image_Id.src.match("Dark0.gif"))
	{	
		Image_Id.src = "Dark1.gif";
	}
	else 
	{
		Image_Id.src = "Dark0.gif";
	}

}
