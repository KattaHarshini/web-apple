document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
        {
    "question": "Two Sum",
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "hint": "Use a hash map to store the difference between target and current element as you iterate through the array.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>We can use a hash map to store the elements we've seen so far along with their indices. For each element, we calculate the complement (target - current element) and check if it exists in the map.</p>

        <pre><code>function twoSum(nums, target) {
            const map = new Map();
            for (let i = 0; i < nums.length; i++) {
                const complement = target - nums[i];
                if (map.has(complement)) {
                    return [map.get(complement), i];
                }
                map.set(nums[i], i);
            }
            return [];
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We traverse the list once</p>
        <p><strong>Space Complexity:</strong> O(n) - We store elements in a hash map</p>
    `
  },
  {
    "question": "Merge Two Sorted Lists",
    "description": "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.",
    "hint": "Iterate through both lists and compare the current nodes to decide which one to append to the merged list.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>We can use an iterative approach. Create a dummy head for the merged list. Compare the heads of list1 and list2, append the smaller one to the merged list, and advance the pointer of that list. Repeat until one of the lists is empty.</p>

        <pre><code>function mergeTwoLists(list1, list2) {
            const dummyHead = new ListNode(0);
            let current = dummyHead;
            while (list1 && list2) {
                if (list1.val < list2.val) {
                    current.next = list1;
                    list1 = list1.next;
                } else {
                    current.next = list2;
                    list2 = list2.next;
                }
                current = current.next;
            }
            if (list1) {
                current.next = list1;
            }
            if (list2) {
                current.next = list2;
            }
            return dummyHead.next;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(m + n) - where m and n are the lengths of the two lists</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space</p>
    `
  },
  {
    "question": "Valid Parentheses",
    "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "hint": "Use a stack to keep track of opening brackets. When a closing bracket is encountered, check if it matches the top of the stack.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Iterate through the string. If we encounter an opening bracket, push it onto the stack. If we encounter a closing bracket, check if the stack is not empty and if the top of the stack is the corresponding opening bracket. If not, the string is invalid.</p>

        <pre><code>function isValid(s) {
            const stack = [];
            const map = {
                ')': '(',
                '}': '{',
                ']': '['
            };
            for (let i = 0; i < s.length; i++) {
                const char = s[i];
                if (char === '(' || char === '{' || char === '[') {
                    stack.push(char);
                } else if (map[char]) {
                    if (stack.length === 0 || stack.pop() !== map[char]) {
                        return false;
                    }
                }
            }
            return stack.length === 0;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We traverse the string once</p>
        <p><strong>Space Complexity:</strong> O(n) - In the worst case, the stack can contain all the opening brackets</p>
    `
  },
  {
    "question": "Flood Fill",
    "description": "An image is represented by a 2-D array of integers, each representing the pixel value of the image. Given a starting pixel (sr, sc) and a color newColor, perform a flood fill.",
    "hint": "Use Depth-First Search (DFS) or Breadth-First Search (BFS) to explore adjacent pixels with the same original color.",
    "answer": `
        <p><strong>Solution Approach (DFS):</strong></p>
        <p>Start from the given pixel. If the current pixel's color is the same as the original color, change it to the new color and recursively call the flood fill function for its four neighbors.</p>

        <pre><code>function floodFill(image, sr, sc, newColor) {
            const originalColor = image[sr][sc];
            if (originalColor === newColor) {
                return image;
            }

            function dfs(r, c) {
                if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== originalColor) {
                    return;
                }
                image[r][c] = newColor;
                dfs(r + 1, c);
                dfs(r - 1, c);
                dfs(r, c + 1);
                dfs(r, c - 1);
            }

            dfs(sr, sc);
            return image;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(m * n) - where m and n are the dimensions of the image, in the worst case, we might visit every pixel</p>
        <p><strong>Space Complexity:</strong> O(m * n) - in the worst case (e.g., if the entire image has the same color), the recursion stack can go up to m * n</p>
    `
  },
  {
    "question": "Merge Intervals",
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals in sorted order.",
    "hint": "First, sort the intervals by their start times. Then, iterate through the sorted intervals and merge overlapping ones.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Sort the intervals based on their start times. Initialize the merged intervals with the first interval. Iterate through the remaining intervals. If the current interval overlaps with the last merged interval, update the end of the last merged interval. Otherwise, add the current interval to the merged intervals.</p>

        <pre><code>function merge(intervals) {
            if (!intervals || intervals.length === 0) {
                return [];
            }
            intervals.sort((a, b) => a[0] - b[0]);
            const merged = [intervals[0]];
            for (let i = 1; i < intervals.length; i++) {
                const currentInterval = intervals[i];
                const lastMergedInterval = merged[merged.length - 1];
                if (currentInterval[0] <= lastMergedInterval[1]) {
                    lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
                } else {
                    merged.push(currentInterval);
                }
            }
            return merged;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n log n) - due to the sorting of the intervals</p>
        <p><strong>Space Complexity:</strong> O(log n) to O(n) depending on the sorting algorithm implementation</p>
    `
  },
  {
    "question": "Binary Tree Inorder Traversal",
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "hint": "Use recursion or an iterative approach with a stack.",
    "answer": `
        <p><strong>Solution Approach (Iterative with Stack):</strong></p>
        <p>Initialize an empty stack and an empty result array. While the current node is not null or the stack is not empty, if the current node is not null, push it onto the stack and move to its left child. Otherwise, pop a node from the stack, add its value to the result array, and move to its right child.</p>

        <pre><code>function inorderTraversal(root) {
            const result = [];
            const stack = [];
            let current = root;
            while (current || stack.length > 0) {
                while (current) {
                    stack.push(current);
                    current = current.left;
                }
                current = stack.pop();
                result.push(current.val);
                current = current.right;
            }
            return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We visit each node once</p>
        <p><strong>Space Complexity:</strong> O(n) - In the worst case (skewed tree), the stack can contain all nodes</p>
    `
  },
  {
    "question": "Lowest Common Ancestor of a Binary Tree",
    "description": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
    "hint": "Use recursion. The LCA is the first node that has one of the target nodes in its left subtree and the other in its right subtree, or if the current node is one of the target nodes.",
    "answer": `
        <p><strong>Solution Approach (Recursive):</strong></p>
        <p>The base case is when the current node is null or one of the target nodes. In the recursive step, call the function for the left and right subtrees. If both calls return a non-null node, the current node is the LCA. If one call returns a non-null node, that node is the LCA (as one of the target nodes must be in its subtree, and the other is either the current node or in its subtree).</p>

        <pre><code>function lowestCommonAncestor(root, p, q) {
            if (!root || root === p || root === q) {
                return root;
            }
            const leftLCA = lowestCommonAncestor(root.left, p, q);
            const rightLCA = lowestCommonAncestor(root.right, p, q);
            if (leftLCA && rightLCA) {
                return root;
            }
            return leftLCA || rightLCA;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - In the worst case, we might visit all nodes</p>
        <p><strong>Space Complexity:</strong> O(n) - In the worst case (skewed tree), the recursion stack can go up to the height of the tree, which can be n</p>
    `
  },
  {
    "question": "Longest Palindromic Substring",
    "description": "Given a string s, find the longest palindromic substring in s.",
    "hint": "Expand around each character (and the space between characters) to find palindromes.",
    "answer": `
        <p><strong>Solution Approach (Expand Around Center):</strong></p>
        <p>Iterate through each character in the string. For each character, consider it as the center of a potential odd-length palindrome and expand outwards. Also, consider the space between each pair of adjacent characters as the center of a potential even-length palindrome and expand outwards. Keep track of the longest palindrome found so far.</p>

        <pre><code>function longestPalindrome(s) {
            if (!s || s.length < 1) return "";
            let start = 0;
            let end = 0;

            function expandAroundCenter(left, right) {
                while (left >= 0 && right < s.length && s[left] === s[right]) {
                    left--;
                    right++;
                }
                return right - left - 1;
            }

            for (let i = 0; i < s.length; i++) {
                const len1 = expandAroundCenter(i, i); // Odd length
                const len2 = expandAroundCenter(i, i + 1); // Even length
                const maxLength = Math.max(len1, len2);
                if (maxLength > end - start + 1) {
                    start = i - Math.floor((maxLength - 1) / 2);
                    end = i + Math.ceil((maxLength - 1) / 2);
                }
            }
            return s.substring(start, end + 1);
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n^2) - We expand around each of the n centers, and the expansion can take O(n) in the worst case.</p>
        <p><strong>Space Complexity:</strong> O(1) - Constant extra space.</p>
    `
  },
  {
    "question": "Binary Tree Level Order Traversal",
    "description": "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    "hint": "Use Breadth-First Search (BFS) with a queue.",
    "answer": `
        <p><strong>Solution Approach (BFS):</strong></p>
        <p>Initialize an empty queue and a result array. Enqueue the root node. While the queue is not empty, process all nodes at the current level. Dequeue each node, add its value to the current level's list, and enqueue its left and right children (if they exist). After processing all nodes at the current level, add the level's list to the result array.</p>

        <pre><code>function levelOrder(root) {
            const result = [];
            if (!root) {
                return result;
            }
            const queue = [root];
            while (queue.length > 0) {
                const levelSize = queue.length;
                const currentLevel = [];
                for (let i = 0; i < levelSize; i++) {
                    const node = queue.shift();
                    currentLevel.push(node.val);
                    if (node.left) {
                        queue.push(node.left);
                    }
                    if (node.right) {
                        queue.push(node.right);
                    }
                }
                result.push(currentLevel);
            }
            return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We visit each node once.</p>
        <p><strong>Space Complexity:</strong> O(w) - where w is the maximum width of the tree (the maximum number of nodes at any level).</p>
    `
  },
  {
    "question": "Maximum Depth of Binary Tree",
    "description": "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "hint": "Use recursion. The depth of a tree is 1 + the maximum depth of its left or right subtree.",
    "answer": `
        <p><strong>Solution Approach (Recursive):</strong></p>
        <p>The base case is when the root is null, in which case the depth is 0. Otherwise, the depth of the tree is 1 plus the maximum of the depths of its left and right subtrees.</p>

        <pre><code>function maxDepth(root) {
            if (!root) {
                return 0;
            }
            const leftDepth = maxDepth(root.left);
            const rightDepth = maxDepth(root.right);
            return 1 + Math.max(leftDepth, rightDepth);
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We visit each node once.</p>
        <p><strong>Space Complexity:</strong> O(h) - where h is the height of the tree, due to the recursion stack. In the worst case (skewed tree), h can be n.</p>
    `
  },
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});