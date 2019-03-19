jQuery(".showPig").slide({
    mainCell:".bd ul",
    effect:"left",
    autoPlay:true
});

jQuery(".txtMarquee-top").slide({
    mainCell:".bd ul",
    autoPlay:true,
    effect:"topMarquee",
    interTime:150
});

jQuery(".multipleColumn").slide({
    titCell:".hd ul",
    mainCell:".bd .ulWrap",
    autoPage:true,
    effect:"leftLoop",
    autoPlay:true,
    vis:1
});
