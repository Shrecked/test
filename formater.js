function go() {
	setTimeout(function(){ gof(); }, 1);
}
function gof() {
var lvlo = document.getElementsByTagName("textarea")[0];
var fin = document.getElementsByTagName("div")[0];
var stro = lvlo.value;
var strt = stro.replace(/</g, "ｉ");
var strth = strt.replace(/>/g, "Ｉ");
var strs = strth.replace(/\//g, "<strong>\/</strong>");
var strn = strs.replace(/\!/, "<strong>!</strong>");
var strf = strn.replace(/ｉ/g, "<strong>\<</strong><b>");
var strfi = strf.replace(/Ｉ/g, "</b><strong>\></strong>");
var strse = strfi.replace(/\n/g, "<br/>");
var stre = strse.replace(/\s/g, "&nbsp;");
fin.innerHTML = null;
fin.innerHTML = stre;
}