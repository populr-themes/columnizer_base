// var fixColumnHeights = function() {
//   $('.columnizer-row').each(function(){
//     var maxHeight = 0;
//     $(this).find('.asset-inner').each(function(){
//       $(this).height('auto');
//       var innerHeight = $(this).innerHeight();
//       if (innerHeight > maxHeight) {
//         maxHeight = innerHeight;
//       }
//     });
//     $(this).find('.asset-inner').innerHeight(maxHeight);
//   });
// }

// $(document).on('pop-initialized', function(){
//   $('.columnizer-row .asset').live('initialize', fixColumnHeights);
//   $('.columnizer-row .asset').live('destroy', function(){
//     $(this).find('.asset-inner').height('auto');
//   });
// });
