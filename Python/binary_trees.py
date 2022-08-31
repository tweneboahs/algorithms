# _________________________________
# TREE SUM
const treeSum = (root) = > {
    // todo

    if (root == = null) return 0


    return root.val + treeSum(root.left) + treeSum(root.right)
}


# _________________________________
# TREE INCLUDES

const treeIncludes = (root, target) = > {
    // todo
    if (root == = null) return false
    if (root.val == = target) return true

    return (treeIncludes(root.left, target) | | treeIncludes(root.right, target))

}

module.exports = {
    treeIncludes,
}


# _________________________________
# TREE MIN VALUE


const treeMinValue = (root) = > {
    // todo
    if (root == = null) return Infinity
    return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right))
}


# _________________________________
# MAX ROOT TO LEAF PATH

const maxPathSum = (root) = > {
    // todo
    if (root == = null) return -Infinity
    if (root.left === null & & root.right == = null) return root.val

    return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right))
}


# _________________________________
# TREE PATH FINDER

const pathFinder = (root, target) = > {
    // todo
    if (root.val == = target) return [root.val]
    if (root == = null) return null
    if (pathFinder(root.left) | | pathFinder(root.right)){
        []
    }
}


# _________________________________
# TREE VALUE COUNT

const treeValueCount = (root, target) = > {
    if (root == = null) return 0
    const match = root.val == = target ? 1: 0

    // if (root.left != =null)
    return(match + treeValueCount(root.left, target) + treeValueCount(root.right, target))

}


# _________________________________
# HOW HIGH

const howHigh = (node) = > {
    if (node == = null) return -1
    const count = node.val ? 1: 0
    return count + Math.max(howHigh(node.left), howHigh(node.right))
}


# _________________________________
# BOTTOM RIGHT VALUE


const bottomRightValue = (root) = > {
    // todo
    const queue = [root]
    let current
    while (queue.length > 0){
        current = queue.shift()
        current.left & & queue.push(current.left)
        current.right & & queue.push(current.right)
    }
    return current.val
}
