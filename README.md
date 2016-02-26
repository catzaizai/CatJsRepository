<h2> the rating tool </h2>

<h3>
  Depend
</h3>
<p>
  jQuery 1.8+, font-awesome.css
</p>
<h3>
  using:
</h3>
<h4> base: </h4>
<code>
  $(".score").score(function () { /* callback */ });
</code>

<h4>
  other
</h4>

<code>
  $(".score").score({ </ br>
     score: 4, // init score </ br>
      callback: function(score){ console.log(score) } // callback </ br>
    });
</code>

<img src="demo.png">
