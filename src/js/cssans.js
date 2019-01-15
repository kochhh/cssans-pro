/**
 * Turns a string into CSSans markup.
 * 
 * @param {object} el   - the DOM element where contents will be inserted
 * @param {string} text - the string to be CSSansified. Unknown characters will result in a gap.
 */

function CSSans(el, text) {
    var wordBlock = '<div class="cssans__word">';
    var sansified = '<div class="cssans__accessible">' + text + '</div>' + wordBlock;

    for (var i in text) {
        sansified += (text[i] == ' ') ? '</div>' + wordBlock : '<span class="cssans-' + text[i] + '"></span>';
    }

    // Close the last wordBlock
    sansified += '</div>';

    el.innerHTML = sansified;
    el.style.lineHeight = '0px';
}