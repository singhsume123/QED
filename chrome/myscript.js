var url = "https://immense-forest-1049.herokuapp.com/restaurants/"

$("li.regular-search-result").each(function(index) {
	var href = $(this).find("a.biz-name")[0]['href'];
	var arr = href.split('/');
	var yelp_id = arr[arr.length - 1];
	arr = yelp_id.split('?');
	yelp_id = arr[0];

	var cur_url = url + yelp_id;
	var wait_time = -1;

	var html_out = "<div class='snippet-block riview-snippet'><div class='highLevelInfo'></div><div class='tableInfo'></div></div>"
	var cur_sel = $(this);

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

			var x = data.restaurant.maxX;
			var y = data.restaurant.maxY;
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
				var row = Number(table.x - 1);
				var col = Number(table.y - 1);
				var table_class = "btn btn-block btn-";
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
			//$.each(data.restaurant.tables, function(index, table) {
			//	cur_sel.append("<tr><td>Table " + (index+1) + "</td><td>" + table.capacity +"</td></tr>")
			//});
		}
	});
});