---
title: algorithm per day
top: false
cover: false
toc: true
mathjax: true
categories:
  - Practice
abbrlink: 29461
date: 2020-04-14 10:08:35
password:
summary:
tags:
---
### 在线编程题刷题平台

Leetcode

赛码网

两个平台会作为不同企业的在线编程平台，他们的输入数据方式不太一样。赛码网中完全零开始，在使用Java语言时，使用Scanner来处理输入数据，见[Scanner类](https://blog.csdn.net/justloveyou_/article/details/69263851)的分析。

## day 1

### two-sum
	暴力解法：时间复杂度为O（n^2）
	运用HashMap：时间复杂度为O（1），相比较于暴力解法，在数据规模较大的时候，还是有时间上的优势的。
	关于containsKey()方法，根据某种哈希算法，直接定位所要的元素，也就是说，这个查找的方法的时间复杂度最好为O（1），若没有直接找到，存储方式变为红黑树，查询复杂度为O（lgn），而并非O（n^2）。
参考：[containsKey()方法的复杂度为何为O（1）](https://blog.csdn.net/qingtian_1993/article/details/80763381)

### mini-parser
	相似题目 flatten-nested-list-iterator
## day 2
### next-greater-element-ii
		暴力解法；
		运用栈；
			在解决循环列表的时候，可以用循环链表、列表中每个数重复两次（可能会有取余操作）、可以用三个for循环（暴力解法）。
			题目中使用栈作为相邻有先后顺寻的元素的存储介质，利用栈的特性，方便得到结果，时间复杂度为O(1),空间复杂度为O（1）。
### biao-qian-yan-zheng-qi-by-leetcode
		这个题目先放放。
### exclusive-time-of-functions
		利用栈来做，类似于中缀表达式求值
### baseball-game
		利用栈的先进后出的特点来操作数据，类似于中缀表达式求值
## day 3
### number-of-atoms
		利用栈和map来解析化学表达式，其中得注意字符和数字处理的API，使用java.util.*来处理排序（Arrays）
## day 4
### asteroid-collision
		利用一个栈来的特点来操作数据，而不是用两个栈
### dailyTemperatures
		利用栈的特点来操作数据，比暴力解法要快得多
## day 5
### backspace-string-compare
	 利用栈的特点来操作数据
### score-of-parentheses
		第一种比较容易想到的方法是利用栈来操作数据，类似于中缀表达式求值。（O(N),O(N)）
		第二种方法：当仔细分析对结果有影响的因素时，会发现不同深度的()的得分会实质性地作用于最终的得分，其他的括号要么是累加，要么是将分数乘以2。进一步抽象，会发现2^x求和（x为()的深度）会是最终的结果（如果输入只有括号）。此时，并没有采用栈，而是发现了求最后结果的过程中，抽象出了数学表达式，利用数学表达式来求最后的结果。(O(N),O(1))
		第三种方法：采用分治策略，组成最后的分的结果的要素分别相加求和。以平衡括号为字符串分解的点，若以左括号为1，右括号为-1，当遍历字符串时，S累加为0时，则说明有平衡括号()。(O(N^2),O(1))

### decoded-string-at-index
	在影响最后结果的因素中，求出字符串结果不是必要的，反而，求出字符串变化后的size，能够实质性地助力求解最后地结果。
	另一方面，在字符串变化的过程中，仔细观察，会发现，当节码字符串长度为size的词重复多次时，索引K的结果与K/size的结果一致。
	正是这两个特点，就能够对暴力解法在时间复杂度或空间复杂度上作优化。
	这也是一例没有采用栈结构来求解的方法，直接运用求值过程中良好的特点来优化求值过程。
	（O(N),O(1)）
### maximum-frequency-stack
	官方代码其中一行：
	group.computeIfAbsent(f, z-> new Stack()).push(x);
	(O(1),O(N))
### online-stock-span
	单调栈（栈中的数据非严格单调递减）
	求出小于或等于今天价格的最大连续日数等价于求出最近的一个大于今日价格的日子
	（O（N）,O(N)）
### sum-of-subarray-minimums
		思路一：所有满足 `A[j]` 为最右且最小的元素的子序列个数 `#(j)`，那么结果就是 `sum #(j) * A[j]`.（O(N),O(N)）
		[c++ 单调栈](https://leetcode-cn.com/problems/sum-of-subarray-minimums/solution/cdan-diao-zhan-by-qwqcxh/)
		思路二：想法是每当我们增加 `j`，这些最小值可能会有关联，事实上，`min(A[i:j+1]) = min(A[i:j], A[j+1])`。采用栈的数据结构。（O(N),O(N)）
		动态规划：
		暴力解法：
### odd-even-jump

### check-if-word-is-valid-after-substitutions
	class Solution { 
		public boolean isValid(String S) {
			 while(S.contains("abc")) { 
			 S = S.replaceAll("abc",""); 
			 } 
		return S.equals(""); 
		} 
	}
### next-greater-node-in-linked-list
	采用单调栈
	暴力解法
	[单调栈解法的其他题目](https://leetcode-cn.com/problems/next-greater-node-in-linked-list/solution/python-dan-diao-zhan-by-jackwener/)
## day 6
### longest-well-performing-interval
	这个题目等下做



2020.10.15

```
merge_intervals 
	Array.sort(),比较器comparator
	https://blog.csdn.net/waldmer/article/details/13015951
```

2020.10.18

关于栈和递归

​	 	[递归的时间复杂度与空间复杂度](https://juejin.im/post/6844903981601259533)

关于队列

关于排序的

​		记忆各种排序方法

​		leetcode insertion-sort-list 

​		注意断链别形成环，造成死循环

​		sort-list

​		链表的头部处理?

​		链表操作，断链cut、挂接merge等	

2020.10.19

​		[***最大间距***](https://leetcode-cn.com/problems/maximum-gap/solution/zui-da-jian-ju-by-leetcode/)，**线性空间复杂度**以及**线性时间复杂度**解决这个问题。桶排序；基数排序可行。

​		[最大数](https://leetcode-cn.com/problems/largest-number/solution/zui-da-shu-bi-jiao-gui-ze-chuan-di-xing-yi-ji-suan/)（largest-number），算法的性质的证明；算法的正确性的证明

​		[contains-duplicate-iii](https://leetcode-cn.com/problems/contains-duplicate-iii/)：二叉搜索树（BST）、[自平衡二叉树的运用（AVL）](https://leetcode-cn.com/problems/contains-duplicate-iii/solution/cun-zai-zhong-fu-yuan-su-iii-by-leetcode/)、红黑树（RBT）、[桶排序的运用](https://leetcode-cn.com/problems/contains-duplicate-iii/solution/cun-zai-zhong-fu-yuan-su-iii-by-leetcode/)（散列表） ---java实现自平衡二叉树的细节

​		[有效的字母异位词（valid-anagram）](https://leetcode-cn.com/problems/valid-anagram/)：

​		

​		