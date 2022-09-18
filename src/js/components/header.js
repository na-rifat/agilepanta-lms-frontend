const header = $(`header`)

$(document).on(`scroll`, function (e) { 
    let self = $(this)
    let currentPos = self.scrollTop();

    if(currentPos > 0 && !header.hasClass(`active`)){
        header.addClass(`active`)
    }else if(currentPos == 0 && header.hasClass(`active`)){
        header.removeClass(`active`)
    }
 })