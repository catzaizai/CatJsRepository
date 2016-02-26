/*！
 * Score Component for jQuery 1.8+
 * Depend font-awesome.css
 * Copyright 2015 Catzaizai
 *
*/

(function (window, document, $, undefined) {
    'use strict';

    // SCORE PUBLIC CLASS DEFINITION
    var Score = function (element, options) {
        this.$element = $(element);
        this.score = options.score;
        this.heartCount = options.msg.length;
        this.msg = options.msg;
        this.callback = options.callback;

        this._init();
    };

    Score.prototype = {
        constructor: Score,

        _init: function () {
            var html = this.getTemplate();
            this.$element.html(html);
            this.$element.children("ul").children("li").on({
                'click': $.proxy(this.clickHeart, this)
            });
            this.$element.on({
                'mouseover': $.proxy(this.mouseOver, this),
                'mouseleave': $.proxy(this.mouseLeave, this)
            });

            this.setChooseHeart(this.score - 1);
        },

        mouseOver: function (event) {
            if (this.$element.is(event.target)) return;
            var index = parseInt($(event.target).attr("data-index"));
            this.setChooseHeart(index);
        },

        mouseLeave: function (event) {
            this.setChooseHeart(this.score - 1);
        },

        clickHeart: function (event) {
            var index = parseInt($(event.target).attr("data-index"));
            this.setChooseHeart(index);
            this.score = index + 1;
            this.callback(this.score);
        },

        setChooseHeart: function (index) {
            if (isNaN(index)) return;
            var list = this.$element.children("ul").children("li");
            for (var i = 0; i < list.length; i++) {
                if ($(list[i]).index() > index) {
                    $(list[i]).children("i").addClass("fa-heart-o");
                    $(list[i]).children("i").removeClass("fa-heart");
                } else {
                    $(list[i]).children("i").removeClass("fa-heart-o");
                    $(list[i]).children("i").addClass("fa-heart");
                }
            }
            this.setChooseLabel(index);
        },

        setChooseLabel: function (index) {
            this.$element.children("label").text(this.msg[index])
        },

        getTemplate: function () {
            var content = '<ul>';
            for (var i = 0; i < this.heartCount; i++) {
                content += '<li><i class="fa fa-heart-o" data-index="' + i + '"></i></li>';
            }
            content += '</ul>';
            content += '<label>' + this.msg[this.score - 1] + '</label>'
            return content;
        }
    };

    $.fn.score = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = null;

            if (typeof option === "function") {
                option = { callback: option }
            }

            $this.data("score", (data = new Score(this, $.extend({}, $.fn.score.defaults, option))));
        })
    };

    $.fn.score.defaults = {
        score: 4,
        msg: ["很差劲", "一般般", "还不错", "满意", "非常满意"],
        callback: function (score) {
            console.log(score);
        }
    };

    $.fn.score.Constructor = Score;

})(window, document, jQuery);
