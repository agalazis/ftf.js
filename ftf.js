/* ftfjs v0.0.1  Copyright [2013] [Andreas Galazis]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.*/
var header=[];


function addchilds(datarow,data,headerindex) {
 //base case: stop recursion when a numeric value is found
 //and insert the value as an object with name value attribute. 
 if (! isNaN (datarow[header[headerindex]]))
 {
   data.children.push({"name":header[headerindex],"size": datarow[header[headerindex]]});
   return data;
 }
 else{
   
 for (var counter = 0; counter <data["children"].length ; counter++) {
 if (data["children"][counter]["name"]==datarow[header[headerindex]]){

   headerindex++;
 //call fanction to add to the already existing level found
 data["children"][counter]=addchilds( datarow,data["children"][counter], headerindex);
 return data;
 }
}
  //add child at the same lavel and call function to add to it
  data["children"].push({"name":datarow[header[headerindex]],"children": []});
   headerindex++;
 data["children"] [data["children"].length-1]=addchilds( datarow,data["children"][data["children"].length-1], headerindex);

 return data;
 
}
}
function ftf(flatdata){
  for (var key in flatdata[0]){
     header.push(key);
  }
   var treedata={"name": "flare","children": []}
  for (var i = 0; i <flatdata.length; i++) {
      treedata= addchilds(flatdata[i],treedata,0);
  }
//just for testing purposes uncomment if you want to debug
//console.log(treedata);
   return treedata;
}
