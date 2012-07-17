TiTableView
===========

Appcelerator Titanium UI TableView with Custom Data and Custom Row with Search

By Default titanium table view search only Title attribute. If we want to set to another attribute we need to set like this below using filterAttribute.

var data=[
{title:'Share Our Ideas',site:'shareourideas.com'},
{title:'Titanium Tutorial',site:'titaniumtutorial.com'},
{title:'Mobiplaybook',site:'www.mobiplaybook.com'},
{title:'Developer Snacks',site:'www.developersnacks.com'},
{title:'Code Worth',site:'www.codeworth.com'},
{title:'My Bank of Knowledge',site:'krish.codeworth.com'}
];

var tabel= Ti.UI.createTableView({
	data:data,
	search:searchBar,
	filterCaseInsensitive:false,
	filterAttribute:'site'  //<-- to set custom search attribute.
});

Same this work for Custom row. Something like this

var myData=[
{name:'Share Our Ideas',site:'shareourideas.com'},
{name:'Titanium Tutorial',site:'titaniumtutorial.com'},
{name:'Mobiplaybook',site:'www.mobiplaybook.com'},
{name:'Developer Snacks',site:'www.developersnacks.com'},
{name:'Code Worth',site:'www.codeworth.com'},
{name:'My Bank of Knowledge',site:'krish.codeworth.com'}
];

var searchBar=Ti.UI.createSearchBar({
		showCancel:true,
		hintText:'type to search'
});
searchBar.addEventListener('cancel',function(e){
	searchBar.value="";
});

var tabel= Ti.UI.createTableView({
	search:searchBar,
	filterCaseInsensitive:false,
	filterAttribute:'site'
});

var rows=[];
for(var item in myData)
{
	var row=Ti.UI.createTableViewRow({
		site:myData[item].site
	});
	var img=Ti.UI.createImageView({
		image:'KS_nav_ui.png',
		height:30,
		width:30,
		left:5,
		top:5,
	});
	row.add(img);
	var label= Ti.UI.createLabel({
		text:" "+myData[item].name,
		left:40,
		borderColor:'#CCC',
		borderRadius:5,
		borderWidth:2
	});
	row.add(label);
	
	rows.push(row);
}

tabel.setData(rows);

in this code please change app_plan.js to app.js to check with plan data and table.