$input = $('#avgwaittime');
var myDataRef = new Firebase('https://lronf6mpnua.firebaseio-demo.com/ihop-college-station');
var uri = "http://getreststatusvm.cloudapp.net/restaurants";
$('#changeavgtime').click(
	function() 
	{
		$hola = $input.val();
		var avgWaitTime = 
		{avgwaittime: $hola};

    	$.get("https://immense-forest-1049.herokuapp.com/restaurants/ihop-college-station/").done(function (data) {
    	console.log(data);
		});
	
		$.post(uri.concat("/1"), avgWaitTime, function(data, textStatus)
        {
            var now = Date.now();
           	console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
	}
);

$(document).ready(function(){
    $.get(uri.concat("/ihop-college-station/tables/1")).done(function (data) {
       if(data.status == 'true')
       {
        $( "#table1" ).prop( "checked", true );
       }
       else
       {
         $( "#table1" ).prop( "checked", false );
       }
        });

    $.get(uri.concat("/ihop-college-station/tables/2")).done(function (data) {
       if(data.status == 'true')
       {
        $( "#table3" ).prop( "checked", true );
       }
       else
       {
         $( "#table3" ).prop( "checked", false );
       }
        });

    $.get(uri.concat("/ihop-college-station/tables/3")).done(function (data) {
       if(data.status == 'true')
       {
        $( "#table2" ).prop( "checked", true );
       }
       else
       {
         $( "#table2" ).prop( "checked", false );
       }
        });

    $.get(uri.concat("/ihop-college-station/tables/4")).done(function (data) {
       if(data.status == 'true')
       {
        $( "#table4" ).prop( "checked", true );
       }
       else
       {
         $( "#table4" ).prop( "checked", false );
       }
        });

     $.get(uri.concat("/ihop-college-station/tables/5")).done(function (data) {
       if(data.status == 'true')
       {
        $( "#table5" ).prop( "checked", true );
       }
       else
       {
         $( "#table5" ).prop( "checked", false );
       }
        });

      $.get(uri.concat("/ihop-college-station/tables/6")).done(function (data) {
       if(data.status == 'true')
       {
        $( "#table6" ).prop( "checked", true );
       }
       else
       {
         $( "#table6" ).prop( "checked", false );
       }
        });

}); 

$('#table1').click(function() {
    var $this = $(this);
    var Status = 
		{status: "true"};

    // $this will contain a reference to the checkbox   
    if ($this.is(':checked')) {
    	var Status = 
		{status: "true"};
        $.post(uri.concat("/1/tables/1"), Status, function(data, textStatus)
        {
           	var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
    } else {
    	var Status = 
		{status: "false"};
    	$.post(uri.concat("/1/tables/1"), Status, function(data, textStatus)
        {
           	var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
        // the checkbox was unchecked
    }
});

$('#table2').click(function() {
    var $this = $(this);
    var Status = 
        {status: "true"};

    // $this will contain a reference to the checkbox   
    if ($this.is(':checked')) {
        var Status = 
        {status: "true"};
        $.post(uri.concat("/1/tables/3"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
    } else {
        var Status = 
        {status: "false"};
        $.post(uri.concat("/1/tables/3"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
        // the checkbox was unchecked
    }
});

$('#table3').click(function() {
    var $this = $(this);
    var Status = 
        {status: "true"};

    // $this will contain a reference to the checkbox   
    if ($this.is(':checked')) {
        var Status = 
        {status: "true"};
        $.post(uri.concat("/1/tables/2"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
    } else {
        var Status = 
        {status: "false"};
        $.post(uri.concat("/1/tables/2"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
        // the checkbox was unchecked
    }
});

$('#table4').click(function() {
    var $this = $(this);
    var Status = 
        {status: "true"};

    // $this will contain a reference to the checkbox   
    if ($this.is(':checked')) {
        var Status = 
        {status: "true"};
        $.post(uri.concat("/1/tables/4"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
    } else {
        var Status = 
        {status: "false"};
        $.post(uri.concat("/1/tables/4"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
        // the checkbox was unchecked
    }
});


$('#table5').click(function() {
    var $this = $(this);
    var Status = 
        {status: "true"};

    // $this will contain a reference to the checkbox   
    if ($this.is(':checked')) {
        var Status = 
        {status: "true"};
        $.post(uri.concat("/1/tables/5"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
    } else {
        var Status = 
        {status: "false"};
        $.post(uri.concat("/1/tables/5"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
        // the checkbox was unchecked
    }
});

$('#table6').click(function() {
    var $this = $(this);
    var Status = 
        {status: "true"};

    // $this will contain a reference to the checkbox   
    if ($this.is(':checked')) {
        var Status = 
        {status: "true"};
        $.post(uri.concat("/1/tables/6"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
    } else {
        var Status = 
        {status: "false"};
        $.post(uri.concat("/1/tables/6"), Status, function(data, textStatus)
        {
            var now = Date.now();
            console.log("Response from server: " + data);
            myDataRef.push({timestamp: now, name: "sumeet", text: "did you get it"});
        });
        // the checkbox was unchecked
    }
});
