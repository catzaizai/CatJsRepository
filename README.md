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
  $(".score").score({ <br />
       score: 4, // init score <br />
       callback: function(score){ console.log(score) } // callback <br />
  });
```

<img src="demo.png">
