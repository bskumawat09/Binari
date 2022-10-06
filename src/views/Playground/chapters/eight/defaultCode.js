export default `
/****************************************************************
 * Initialize the binary tree on the right and finds the Depth of the tree
 *
 * @param tree (Node)
 * 
 * @method nodeToRootPath
 * * Finds the path from given node to root node in binary tree using recursive method
 * *
 * * @param tree (Node)
 * 
 *****************************************************************/
function Node(value) {
    this.left = null
    this.right = null
    this.value = value
    
    this.insert = function(newValue) {
        if (newValue < this.value) {
            if(this.left == null) {
                this.left = new Node(newValue)
            }
            else {
                this.left.insert(newValue)
            }
        }
        else if (newValue > this.value) {
            if (this.right == null) {
                this.right = new Node(newValue)
            }
            else {
                this.right.insert(newValue)
            }
        }
    }

    this.nodeToRootPath = function(tree, key) {
        if (tree == null) {
            return []
        }
        if(tree.value == key) {
            return [tree.value]
        }
        let leftPath = this.nodeToRootPath(tree.left, key)
        if(leftPath.length > 0) {
            leftPath.push(tree.value)
            return leftPath
        }

        let rightPath = this.nodeToRootPath(tree.right, key)
        if(rightPath.length > 0) {
            rightPath.push(tree.value)
            return rightPath
        }
        
        return []
    }
}

let tree = new Node(50)
    tree.insert(25)
    tree.insert(15)
    tree.insert(64)
    tree.insert(55)
    tree.insert(40)
    tree.insert(70)

let path = tree.nodeToRootPath(tree, 70)
path.length ? console.log("Path = " + path) : console.log("Node not found")
`;
