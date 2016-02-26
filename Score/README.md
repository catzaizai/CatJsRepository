# the rating tool 

### Depend

>jQuery 1.8+, font-awesome.css

### using:

#### base: 

``` javascript
  $(".score").score(function () { /* callback */ });
```


#### other
``` javascript
  $(".score").score({ 
       score: 4, // init score 
       callback: function(score){ console.log(score) } // callback 
  });
```

<img src="Score/demo.png">
