/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let hash = "#";
for (let i = 0; i < 7; i++) {
  console.log(hash);
  hash += "#";
}
