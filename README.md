ftf.js
======

FlatToFlarejs converts your flat json data to flare tree datastructure
Requirements:
Your json data should first comply with the following rules:-( in later commits I 'll try to minimise the ammount of rules required)
- Data should be in json format 
- Data should be sorted by ancestry (For example if you get your json from a csv file before you convert it to json move the column of the parrent node to the left and its child node to the right (the leftmost column is the root)
(for example column 3 is the child of column 2 which is the child of column 1)
- the  current function asumes that you are interested to show a numeric value as a leafnode,therfore the string catgory colums should be at the left and the numeric to the right (as they are leaf nodes- Remember leftmost column is the root!)
- If you have more than on e numeric columns the recursive function calling stops at the first column found with numeric value as the base case is to find  a numeric leaf node.

Use ftf(testdata,true) to sum your leafnodes (leafnode parents will have a single leafnode as a child). You can also use ftf(testdata,false) to keep the leafnodes seperated
