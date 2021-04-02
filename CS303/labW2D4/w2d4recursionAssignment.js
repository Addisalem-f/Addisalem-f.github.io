"use strict";
//Q1

class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function nameInTree(tree) {

    console.log(tree.value);
    if (tree.descendents === null) return;
    tree.descendents.forEach(child => nameInTree(child));
}

nameInTree(homer);

//--------------------------------


{
    class TreeNode1 {
        constructor(value) {
            this.value = value;
            this.descendents = [];
        }
    }
    // create nodes with values
    const abe1 = new TreeNode1('Abe');
    const homer1 = new TreeNode1('Homer');
    const bart1 = new TreeNode1('Bart');
    const lisa1 = new TreeNode1('Lisa');
    const maggie1 = new TreeNode1('Maggie');
    // associate root with is descendents
    abe1.descendents.push(homer1);
    homer1.descendents.push(bart1, lisa1, maggie1);

    function contains(node, target) {
        ///base case -- if children is null or empty 

        if (node.descendents === null) {
            if (node.value === target) {
                return true;
            } else {
                return false;
            }
        } else { //reductive recursion step
            let childResult = false;
            if (node.value === target) {
                return true;
            }
            for (let child of node.descendents) {
                childResult = contains(child, target);
                if (childResult === true) {
                    return true;
                }
            }
            return false; //did not find the target 
        }
    }

    console.log(contains(abe1, "Homer"));

}


//------------------------------------------



class TreeNode1 {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}
// create nodes with values
const abe1 = new TreeNode1('Abe');
const homer1 = new TreeNode1('Homer');
const bart1 = new TreeNode1('Bart');
const lisa1 = new TreeNode1('Lisa');
const maggie1 = new TreeNode1('Maggie');
// associate root with is descendents
abe1.descendents.push(homer1);
homer1.descendents.push(bart1, lisa1, maggie1);

function targetValue(tree, name) {
    if (tree.value === name) {
        console.log(tree);
    }
    if (tree.descendents === null) return;
    tree.descendents.forEach(child => targetValue(child, name));
}

let nameValue = "Homer";
targetValue(homer1, nameValue);



//========================================================================================

{
    function treeModifier(treeNode, modFunc) {
        modFunc(treeNode);
        if (treeNode.descendents.length === 0) {
            return undefined;
        } else {  //loop through the array of descendents and recursively call treeModifier
            for (const node of treeNode.descendents) {
                treeModifier(node, modFunc);
            }
        }
    }

    let a = [];
    let b = [];
    console.log(a === b);

    function starFunction(node) {
        node.value = "***" + node.value + "***";
        return undefined;
    }

    function caps(node) {
        node.value = node.value.toUpperCase();
    }


    class TreeNode {

        constructor(value) {
            this.value = value;
            this.descendents = [];
        }
    }

    // create nodes with values
    const abe = new TreeNode('Abe');
    const homer = new TreeNode('Homer');
    const bart = new TreeNode('Bart');
    const lisa = new TreeNode('Lisa');
    const maggie = new TreeNode('Maggie');
    // associate root with is descendents
    abe.descendents.push(homer);
    homer.descendents.push(bart, lisa, maggie);

    console.log(treeModifier(homer, starFunction));
    console.log('now tree has stars', abe);

}

//from w2d3
function getTree() {

    let node3 = {
        name: "p",
        value: "This is text in the a paragraph",
        children: null
    };
    let node4 = {
        name: "label",
        value: "Name",
        children: null
    };
    let node5 = {
        name: "input",
        value: "this was typed by a user",
        children: null
    };
    let node2 = {
        name: "div",
        value: null,
        children: [node4, node5]
    };
    let node1 = {
        name: "body",
        children: [node2, node3],
        value: null,
    };


    return node1;
}
//RTREE

function recurseTree(tree) {

    console.log(tree.name, tree.value);
    let child = tree.children;

    if (child !== null) child.forEach(n => recurseTree(n));

}


function callrecurseTree() { recurseTree(getTree()); }
//RTREE
//ITREE//ITREE
// eslint-disable-next-line require-jsdoc, no-unused-vars
function iterativeTree(tree) {

    let stack = [];

    do {

        // Log and Remove from Stack
        console.log(tree.name, tree.value);
        stack.shift();
        let child = tree.children;

        // Add Children to Stack
        if (child !== null) child.forEach(n => stack.push(n));

        tree = stack[0];

    } while (tree !== undefined);

}

function calliterativeTree() { recurseTree(getTree()); }