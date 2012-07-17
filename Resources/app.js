// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFF');


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tabel Search with Custom property',
    backgroundColor:'#fff'
});

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

win1.add(tabel);

win1.open();
