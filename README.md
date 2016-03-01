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
       score: 3, // init score
       callback: function(score){ console.log(score) } // callback 
  });
```

<img src="demo.png">


Demo 链接 [score][1]

[1]: http://catzaizai.github.io/jQuery-Widget-Score/