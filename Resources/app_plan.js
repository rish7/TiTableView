// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFF');


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tabel Search with Custom property',
    backgroundColor:'#fff'
});

var data=[
{title:'Share Our Ideas',site:'shareourideas.com'},
{title:'Titanium Tutorial',site:'titaniumtutorial.com'},
{title:'Mobiplaybook',site:'www.mobiplaybook.com'},
{title:'Developer Snacks',site:'www.developersnacks.com'},
{title:'Code Worth',site:'www.codeworth.com'},
{title:'My Bank of Knowledge',site:'krish.codeworth.com'}
];

var searchBar=Ti.UI.createSearchBar({
		showCancel:true,
		hintText:'type to search'
});
searchBar.addEventListener('cancel',function(e){
	searchBar.value="";
});

var tabel= Ti.UI.createTableView({
	data:data,
	search:searchBar,
	filterCaseInsensitive:false,
	filterAttribute:'site'
});

win1.add(tabel);

win1.open();
