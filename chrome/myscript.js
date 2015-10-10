var url = "https://immense-forest-1049.herokuapp.com/restaurants/"

$("li.regular-search-result").each(function(index) {
	var href = $(this).find("a.biz-name")[0]['href'];
	var arr = href.split('/');
	var yelp_id = arr[arr.length - 1];
	arr = yelp_id.split('?');
	yelp_id = arr[0];

	var cur_url = url + yelp_id;
	var wait_time = -1;

	$(this).append("<div class='snippet-block riview-snippet'>");

	var cur_sel = $(this);

	$.getJSON(cur_url, function(data) {
		cur_sel.append("<p>Wait Time = " + data.restaurant.avgwaittime + "</p>");
		cur_sel.append("<table>");
		$.each(data.restaurant.tables, function(index, table) {
			cur_sel.append("<tr><td>Table " + (index+1) + "</td><td>" + table.capacity +"</td></tr>")
		});
		cur_sel.append("</table>");
	});
	
	$(this).append("<p>Yelp ID = " + yelp_id + "</p>");
	$(this).append("</div>");
});