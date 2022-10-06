export default `
# Node To Root Path
## Fundamentals
Node To Root Path is an array of nodes along the path from given node to root node.
- ** Algorithm to check if the tree is balanced: **
1. Return [] if tree is empty (an empty tree is balanced).
2. If current node is equal to required node then add it to array and return it
3. Else search for required node in left and right subtrees recursively.
4. If path returned from left or right subtree is non-empty that means it is found in left or right subtree respectively, add current node to path and return it.
5. Else return empty array []
`;
