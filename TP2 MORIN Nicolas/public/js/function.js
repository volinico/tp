function clickLog(element){

  parent = element.parentNode;
  desc = parent.getElementsByTagName('p')[0].innerHTML;
  console.log(desc);
}
