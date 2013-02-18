var fixColumnHeights = function() {
  $('.columnizer-row').each(function(){
    var maxHeight = 0;
    $(this).find('.asset-inner').each(function(){
      $(this).height('auto');
      var innerHeight = $(this).innerHeight();
      if (innerHeight > maxHeight) {
        maxHeight = innerHeight;
      }
    });
    $(this).find('.asset-inner').innerHeight(maxHeight);
  });
}

$(document).on('pop-initialized', function(){
  $('.columnizer-row .asset').live('initialize', fixColumnHeights);
  $('.columnizer-row .asset').live('destroy', function(){
    $(this).find('.asset-inner').height('auto');
  });
});

// $(document).on('pop-initialized', function(){
//   $.fancybox.init();

//   $('.asset-type-imagegroup').live('initialize', function(e, asset){
//     $(this).find('a.fancybox').fancybox({
//       type: 'image',
//       centerOnScroll: true
//     });
//   });

//   $('.columnizer-row:not(.columnizer-cols1) .asset:not(.asset-type-text)').live('initialize', function(e, asset){
//     fixBaseline(e.currentTarget);
//   });

//   $('.columnizer-row:not(.columnizer-cols1) .asset:not(.asset-type-text)').live('destroy', function(e, asset){
//     fixBaseline(e.currentTarget);
//   });
// });

// Baseline Fix
// Can be used to make sure body and caption text
// from different assets share baselines. In order 
// for this to work properly, asset title text line 
// must be a multiple of the baseline height. 
//
// function fixBaseline(el) {
//   var $el = $(el).find('.content');
//   $el.imagesLoaded(function(images, proper, broken){
//     var height = $el.height();
//     var baseline = 20;
//     var offset = (baseline - height % baseline) % baseline;
//     $el.css('padding-bottom', offset + 'px');
//   });
//   $(document).imagesLoaded(function(){
//     Populr.ThemeEngine.repack();
//   });
// }
