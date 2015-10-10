var url = "http://getreststatusvm.cloudapp.net/restaurants/"
var firebaseRefURL = "https://lronf6mpnua.firebaseio-demo.com/ihop-college-station/";
var messagesRef = new Firebase(firebaseRefURL);

$("li.regular-search-result").each(function(index) {
	var cur_sel = $(this);
	var href = $(this).find("a.biz-name")[0]['href'];
	var arr = href.split('/');
	var yelp_id = arr[arr.length - 1];
	arr = yelp_id.split('?');
	yelp_id = arr[0];
	$(this).addClass('result-div-' + yelp_id);

	var cur_url = url + yelp_id;
	var wait_time = -1;

	var html_out = "<div class='snippet-block riview-snippet'><div class='highLevelInfo'></div><div class='tableInfo'></div></div>"

	$('div.search-result.natural-search-result', cur_sel).append(html_out);

	$.getJSON(cur_url, function(data) {
		if (data.restaurant.error == "0") {
			var wait_time = Number(data.restaurant.avgwaittime);
			var wait_class = "btn btn-";
			if (wait_time > 30) {
				wait_class += "warning";
			} else if (wait_time > 0) {
				wait_class += "info";
			} else {
				wait_class += "success";
			}
			var empty_tables = Number(data.restaurant.empty_tables);
			console.log(yelp_id + " : " + wait_time + " : " + empty_tables);

			var info = "<table class='table table-condensed'>"
			info += "<tr><td><button type='button' class='"+ wait_class +"'>Wait Time: ";
			info += (wait_time + "</button></td>");
			info += ("<td><button type='button' class='tableShow " + wait_class + "'>Empty Tables: ")
			info += (empty_tables + "</button></td></tr></table>")
			$('div.highLevelInfo', cur_sel).html(info);

			var x = data.restaurant.maxY;
			var y = data.restaurant.maxX;
			var tbl = "<table class='table table-bordered infoTable'>";
			for (var i = 0; i < x; i++) {
				var row = "<tr>";
				for (var j = 0; j < y; j++) {
					row += ("<td>Table</td>");
				}
				row += ("</tr>");
				tbl += row;
			}
			tbl += "</table>";

			$('div.tableInfo', cur_sel).hide();
			$('div.tableInfo', cur_sel).html(tbl);
			
			var tables = data.restaurant.tables;
			for (var i = 0; i < tables.length; i++) {
				var table = tables[i];
				var row = Number(table.y - 1);
				var col = Number(table.x - 1);
				var table_class = "fixedWidth btn btn-";
				if (table.status == "true") {
					table_class += "warning";
				} else {
					table_class += "success";
				}
				var cap = table.capacity;
				var selector = 'table.infoTable tr:eq(' + row + ') td:eq(' + col + ')';
				console.log(selector);
				$(selector, cur_sel).html("<button type='button' class='" + table_class + "'>" + cap + "</button>");
			}

			$('button.tableShow', cur_sel).click(function() {
				$('div.tableInfo', cur_sel).slideToggle(300);
			});
		}
	});
});

function updateRestaurant(yelp_id) {
	var cur_selector = 'li.' + 'result-div-' + yelp_id;
	var cur_sel = $(cur_selector);

	var cur_url = url + yelp_id;

	$.getJSON(cur_url, function(data) {
		if (data.restaurant.error == "0") {
			var wait_time = Number(data.restaurant.avgwaittime);
			var wait_class = "btn btn-";
			if (wait_time > 30) {
				wait_class += "warning";
			} else if (wait_time > 0) {
				wait_class += "info";
			} else {
				wait_class += "success";
			}
			var empty_tables = Number(data.restaurant.empty_tables);
			console.log(yelp_id + " : " + wait_time + " : " + empty_tables);

			var info = "<table class='table table-condensed'>"
			info += "<tr><td><button type='button' class='"+ wait_class +"'>Wait Time: ";
			info += (wait_time + "</button></td>");
			info += ("<td><button type='button' class='tableShow " + wait_class + "'>Empty Tables: ")
			info += (empty_tables + "</button></td></tr></table>")
			$('div.highLevelInfo', cur_sel).html(info);

			var x = data.restaurant.maxY;
			var y = data.restaurant.maxX;
			
			var tables = data.restaurant.tables;
			for (var i = 0; i < tables.length; i++) {
				var table = tables[i];
				var row = Number(table.y - 1);
				var col = Number(table.x - 1);
				var table_class = "fixedWidth btn btn-";
				if (table.status == "true") {
					table_class += "warning";
				} else {
					table_class += "success";
				}
				var cap = table.capacity;
				var selector = 'table.infoTable tr:eq(' + row + ') td:eq(' + col + ')';
				console.log(selector);
				$(selector, cur_sel).html("<button type='button' class='" + table_class + "'>" + cap + "</button>");
			}
		}
		$('button.tableShow', cur_sel).click(function() {
			$('div.tableInfo', cur_sel).slideToggle(300);
		});
	});
}

// Retrieve new posts as they are added to our database
messagesRef.orderByChild('timestamp').startAt(Date.now()).on('child_added', function(snapshot) {
	updateRestaurant('ihop-college-station');
});


//updateRestaurant('ihop-college-station');
