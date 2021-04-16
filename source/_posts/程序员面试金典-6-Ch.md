---
title: 程序员面试金典-6-Ch
top: false
cover: false
toc: true
mathjax: true
abbrlink: 41175
date: 2020-08-19 21:00:02
password:
summary:
tags:
categories: 面试
---

行为面试题

| **常见问题**     | **项目 1** | **项目 2** | **项目 3** |
| ---------------- | ---------- | ---------- | ---------- |
| 遇到过的挑战     |            |            |            |
| 遭遇过的滑铁卢   |            |            |            |
| 最享受什么       |            |            |            |
| 如何体现领导力   |            |            |            |
| 如何处理冲突     |            |            |            |
| 有哪些可改进之处 |            |            |            |

确保你有1至3个项目可以拿得出手，并能就其细节侃侃而谈

 

自我介绍：

​    

**核心数据结构、算法及概念**

 

| **数据结构**       | **算法**     | **概念**                                                     |
| ------------------ | ------------ | ------------------------------------------------------------ |
| 链表               | 广度优先搜索 | 位操作                                                       |
| 树、单词查找树、图 | 深度优先搜索 | 内存（堆和栈）                                               |
| 栈和队列           | 二分查找     | 递归                                                         |
| 堆                 | 归并排序     | 动态规划                                                     |
| 向量/数组列表      | 快排         | 大![O](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif) 时间及空间 |
| 散列表             |              |                                                              |

对于上述各项题目，务必掌握它们的具体用法、实现方法、应用场景以及空间和时间复杂度。

一种不错的方法就是练习如何实现数据结构和算法（先在纸上，然后在电脑上）。你会在这个过程中学到数据结构内部是如何工作的，这对很多面试而言都是不可或缺的。

你错过上面那段了吗？千万不要错过，这非常重要。如果对上面列出的某个数据结构和算法感觉不能运用自如，就从头开始练习吧。

其中，散列表是必不可少的一个题目。对这个数据结构，务必要胸有成竹。

 

涉及可扩展性或者内存排序限制等问题，同时，这张表可以拿来做速算

| **2****的幂** | **准确值（\*X\* ）** | **近似值** | ***X\*** **字节转换成MB、GB等** |
| ------------- | -------------------- | ---------- | ------------------------------- |
| 7             | 128                  |            |                                 |
| 8             | 256                  |            |                                 |
| 10            | 1024                 | 一千       | 1 K                             |
| 16            | 65 536               |            | 64 K                            |
| 20            | 1 048 576            | 一百万     | 1 MB                            |
| 30            | 1 073 741 824        | 十亿       | 1 GB                            |
| 32            | 4 294 967 296        |            | 4 GB                            |
| 40            | 1 099 511 627 776    | 一万亿     | 1 TB                            |

 

BUD优化：瓶颈、无用功、重复性工作

你一旦有了蛮力法，就应该努力优化该方法。以下技巧就有了用武之地。

(1) 寻找未使用的信息。你的面试官告诉过你数组是有序的吗？你如何利用这些信息？

(2) 换个新例子。很多时候，换个不同的例子会让你思路畅通，看到问题模式所在。

(3) 尝试错误解法。低效的例子能帮你看清优化的方法，一个错误的解法可能会帮助你找到正确的方法。比方说，如果让你从一个所有值可能都相等的集合中生成一个随机值。一个错误的方法可能是直接返回半随机值。可以返回任何值，但是可能某些值概率更大，进而思考为什么解决方案不是完美随机值。你能调整概率吗？

(4) 权衡时间、空间。有时存储额外的问题相关数据可能对优化运行时间有益。

(5) 预处理信息。有办法重新组织数据（排序等）或者预先计算一些有助于节省时间的值吗？

(6) 使用散列表。散列表在面试题中用途广泛，你应该第一个想到它。

(7) 考虑可想象的极限运行时间（详见7.9节）。

在蛮力法基础上试试这些技巧，寻找BUD的优化点。

 

**测试**

在现实中，不经过测试就不会签入代码；在面试中，未经过测试同样不要“提交”。

测试代码有两种办法：一种聪明的，一种不那么聪明的。

许多求职者会用最开始的例子来测试代码。那样做可能会发现一些bug，但同样会花很长时间。手动测试很慢。如果设计算法时真的使用了一个大而好的例子，那么测试时间就会很长，但最后可能只在代码末尾发现一些小问题。

你应该尝试以下方法。

(1) 从概念测试着手。概念测试就是阅读和分析代码的每一行。像代码评审那样思考，在心中解释每一行代码的含义。

(2) 跳着看代码。重点检查类似x = length-2 的行。对于for 循环，要尤为注意初始化的地方，比如i = 1 。当你真的去检查时，就很容易发现小错误。

(3) 热点代码。如果你编程经验足够丰富的话，就会知道哪些地方可能出错。递归中的基线条件、整数除法、二叉树中的空节点、链表迭代中的开始和结束，这些要反复检查才行。

(4) 短小精悍的用例。接下来开始尝试测试代码，使用真实、具体的用例。不要使用大而全的例子，比如前面用来开发算法的8元素数组，只需要使用3到4个元素的数组就够了。这样也可以发现相同的bug，但比大的快多了。

(5) 特殊用例。用空值、单个元素、极端情况和其他特殊情况检测代码。

发现了bug（很可能会）就要修复。但注意不要贸然修改。仔细斟酌，找出问题所在，找到最佳的修改方案，只有这样才能动手。

 

 

优化和解体技巧

​     不事先带入专业的知识，试着把它当作日常生活问题来解决

​     从约束少的，个例出发，再推广到适应多种情况的解决方法

​     由基础例子出发推广得到解决办法

​     遍历数据结构，挑选个合适的，说不定就有了个较好的解决办法

​     想象问题的极限

好的代码

​     多使用数据结构

​     适当代码复用

​     模块化

​     灵活性和通用性

​     错误检查

​          

 

数据结构

​     数组与字符串

[9.1　数组与字符串](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_160)

[9.1.1　散列表](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_161)

​          散列表是一种通过将键（key）映射为值（value）从而实现快速查找的数据结构。

​          使用一个链表构成的数组与一个散列函数来实现散列表

​          通过平衡二叉搜索树来实现散列表。该方法的查找时间是O(\log N) 。该方法的好处是用到的空间可能更少，因为我们不再需要分配一个大数组。还可以按照键的顺序进行迭代访问，在某些时候这样做很有用。

​          散列表冲突解决方案

​              

[9.1.2　ArrayList与可变长度数组](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_162)

​          这是面试中的一个基础数据结构。无论使用何种编程语言，都要确保能够熟练运用动态数组（链表）。

​          最终扩容：复制n/2 个元素

 

之前的扩容：复制n/4 个元素

 

之前的扩容：复制n/8 个元素

​     

之前的扩容：复制n/16 个元素

 

……

 

第二次扩容：复制2个元素

 

第一次扩容：复制1个元素

[9.1.3　StringBuilder](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_163)

​          StringBuilder 可以避免普通拼接字符串方法效率低的问题。它会直接创建一个足以容纳所有字符串的可变长度数组，等到拼接完成才将这些字符串转成一个字符串

​          拉宾-卡普（Rabin-Karp）子串查找

[9.2　链表](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_164)

[9.2.1　创建链表](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_165)

​          链表是一种用于表示一系列节点的数据结构。在单向链表中，每个节点指向链表中的下一个节点。而在双向链表中，每个节点同时具备指向前一个节点和后一个节点的指针

​          与数组不同的是，无法在常数时间复杂度内访问链表的一个特定索引。这意味着如果要访问链表中的第K 个元素，需要迭代访问K 个元素。

​          

链表的好处在于你可以在常数时间复杂度内加入和删除元素。这对于某些特定的程序大有用处

切记：在面试中遇到链表题时，务必弄清楚它到底是单向链表还是双向链表

[9.2.2　删除单向链表中的节点](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_166)

​          (1) 检查空指针；(2) 必要时更新表头（head）或表尾（tail）指针。

[9.2.3　“快行指针”技巧](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_167)

​          

​          

[9.2.4　递归问题](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_168)

​          许多链表问题都要用到递归。解决链表问题碰壁时，不妨试试递归法能否奏效。这里暂时不会深入探讨递归，后面会有专门章节予以讲解。

当然，还需注意递归算法至少要占用O(n) 的空间，其中n 为递归调用的层数。实际上，所有递归算法都可以 转换成迭代法，只是后者实现起来可能要复杂得多

[9.3　栈与队列](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_169)

​     熟练掌握数据结构的基本原理，栈与队列问题处理起来要容易得多。当然，有些问题也可能相当棘手。部分问题不过是对基本数据结构略作调整，其他问题则要难得多

[9.3.1　实现一个栈](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_170)

​     与数组不同的是，栈无法在常数时间复杂度内访问第i 个元素。但是，因为栈不需要在添加和删除操作时移动元素，所以可以在常数时间复杂度内完成此类操作。

​     下面给出了栈的简单实现代码。注意，如果只从链表的一端添加和删除元素，栈也可以用链表实现。

​     对于某些递归算法，栈通常大有用处。有时，你需要在递归时把临时数据加入到栈中，在回溯时（例如，在递归判断失败时）再删除该数据。栈是实现这类算法的一种直观方法。

当使用迭代法实现递归算法时，栈也可派上用场。（这是一个很好的练习项目。选择一个简单的递归算法并用迭代法实现该算法。）

[9.3.2　实现一个队列](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_171)

​     队列也可以用链表实现。事实上，只要元素是从链表的相反的两端添加和删除的，链表和队列本质上就是一样的。

​     更新队列当中第一个和最后一个节点很容易出错，请务必再三确认。

队列常用于广度优先搜索或缓存的实现中。

例如，在广度优先搜索中，我们使用队列来存储需要被处理的节点。每处理一个节点时，就把其相邻节点加入到队列的尾端。这使得我们可以按照发现节点的顺序处理各个节点。

[9.4　树与图](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_172)

​     能够游刃有余地从无到有实现树或图，这是求职者必不可少的一种技能。

[9.4.1　树的类型](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_173)

​     9.4.1.1 树与二叉树

​     9.4.1.2 二叉树与二叉搜索树

​          二叉搜索树是二叉树的一种，该树的所有节点均需满足如下属性：全部左子孙节点 \leqslant n< 全部右子孙节点。

​          二叉搜索树对于“相等”的定义可能会略有不同。根据一些定义，该类树不能有重复的值。在其他方面，重复的值将在右侧或者可以在任一侧。所有这些都是有效的定义，但你应该向面试官澄清该问题。

​     9.4.1.3 平衡与不平衡

​          平衡一棵树并不表示左子树和右子树的大小完全相同（如9.4.1.6节中的完美二叉树所示）。思考此类问题的一个方法是，“平衡”树实际上多半意味着“不是非常不平衡”的树。它的平衡性足以确保执行insert 和find 操作可以在O(\log n) 的时间复杂度内完成，但其并不一定是严格意义上的平衡树。

​          平衡树的两种常见类型是红黑树（11.7节）和AVL树（11.6节）

​     9.4.1.4 完整二叉树

​     9.4.1.5 满二叉树

​     9.4.1.6 完美二叉树

​          完美二叉树既是完整二叉树，又是满二叉树。所有叶节点都处于同一层，而此层包含最大的节点数。

[9.4.2　二叉树的遍历](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_174)

​          面试之前，对实现中序、后序和前序遍历，你要做到轻车熟路，其中在面试中最常见的是中序遍历。

​          9.4.2.1　中序遍历

```
1.   void inOrderTraversal(TreeNode node) {
2.   if (node != null) {

3.    inOrderTraversal(node.left);

4.    visit(node);

5.    inOrderTraversal(node.right);

6.   }

7.  }
```



​          9.4.2.2　前序遍历

```
1.   void preOrderTraversal(TreeNode node) {
2.     if (node != null) {
3.       visit(node);
4.       preOrderTraversal(node.left);
5.       preOrderTraversal(node.right);
6.     }
7.   }
```

 

​          9.4.2.3　后序遍历

```
1.   void postOrderTraversal(TreeNode node) {
2.     if (node != null) {
3.       postOrderTraversal(node.left);
4.       postOrderTraversal(node.right);
5.       visit(node);
6.     }
7.   }
```

 

[9.4.3　二叉堆（小顶堆与大顶堆）](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_175)

​          在最小堆中有两个关键操作：insert 和extract_min 。

[9.4.4　单词查找树（前序树）](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_176)

​          单词查找树（有时被称为前序树）是一种有趣的数据结构。该数据结构多次出现在面试题目中，却在算法教科书中鲜有涉及。     

​          通常情况下，单词查找树用于存储整个（英文）语言以便于快速前缀查找。虽然散列表可以快速查找字符串是否是有效的单词，但是它不能识别字符串是否是任何有效单词的前缀。单词查找树则可以很快做到这一点。

​          

[9.4.5　图](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_177)

​          简单说来，图是节点与节点之间边的集合。

​          在编程的过程中，有两种常见方法表示图。

​          9.4.5.1　邻接链表法

​          9.4.5.2　邻接矩阵法

​              由链表（或数组，动态数组）组成的数组（或散列表）也可以存储邻接链表。

​              可以使用于邻接链表的算法（广度搜索等）同样可以应用于邻接矩阵，但是其效率会有所降低。在邻接链表表示法中，你可以方便地迭代一个节点的相邻节点。在邻接矩阵表示法中，你需要迭代所有节点以便于找出某个节点的所有相邻节点。

[9.4.6　图的搜索](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_178)

​          值得注意的是，BFS和DFS通常用于不同的场景。如要访问图中所有节点，或者访问最少的节点直至找到想找的节点，DFS一般最为简单。但是，如果我们想找到两个节点中的最短路径（或任意路径），BFS一般说来更加适宜

9.4.6.2　深度优先搜索DFS

​               注意，前序和树遍历的其他形式都是一种DFS。主要区别在于，对图实现该算法时，我们必须先检查该节点是否已访问。如果不这么做，就可能陷入无限循环。

9.4.6.2　广度优先搜索 BFS

​              它是通过队列实现的。

​              当面试官要求你实现BFS时，关键在于谨记队列的使用。

9.4.6.3 双向搜索

​               双向搜索用于查找起始节点和目的节点间的最短路径。它本质上是从起始节点和目的节点同时开始的两个广度优先搜索。当两个搜索相遇时，我们即找到了一条路径。

​          

[9.5　位操作](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_179)

[9.5.1　手工位操作](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_180)

[9.5.2　位操作原理与技巧](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_181)

​     

| x ^ 0s = x  | x & 0s = 0 | x \| 0s = x  |
| ----------- | ---------- | ------------ |
| x ^ 1s = ~x | x & 1s = x | x \| 1s = 1s |
| x ^ x = 0   | x & x = x  | x \| x = x   |

 

[9.5.3　二进制补码与负数](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_182)

​     

[9.5.4　算术右移与逻辑右移](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_183)

​     有两种类型的右移操作符。算术右移基本上等同于将数除以2。逻辑右移则和我们亲眼看到的移动数位的操作一致。最好可以通过负数进行描述。

[9.5.5　常见位操作：获取与设置数位](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_184)

​     9.5.5.1　获取数位

​     9.5.5.2　设置数位

​     9.5.5.3　清零数位

​     9.5.5.4　更新数位

 

[9.6　数学与逻辑题](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_185)

​     

[9.6.1　素数](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_186)

[9.6.2　概率](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_187)

[9.6.3　大声说出你的思路](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_188)

[9.6.4　总结规律和模式](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_189)

[9.6.5　略作变通](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_190)

[9.6.6　触类旁通](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_191)

[9.7　面向对象设计](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_192)

[9.7.1　如何解答](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_193)

​     9.7.1.1　步骤1：处理不明确的地方

​     9.7.1.2　步骤2：定义核心对象

​     9.7.1.3　步骤3：分析对象关系

​     9.7.1.4　步骤4：研究对象的动作

[9.7.2　设计模式](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_194)

​     单例设计（singleton）和工厂方法（factory method）设计模式常见于面试

​     请不要误入歧途——总想着找到某一问题的“正确”设计模式。你需要创建适合于该问题的设计。有时，这样的设计或许是已经存在的模式，但很多情况下并不是

​     需要说明的是，很多人不喜欢使用单例设计模式，甚至称其为“反模式”。原因之一是该模式会干扰单元测试。

[9.8　递归与动态规划](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_195)

​     尽管递归问题花样繁多，但题型大都类似。问题属不属于递归问题，就看它是否能分解为子问题。

 

当你听到问题的开头是这样的：“设计一个算法计算第n 个……”“列出前n 个……”“实现一个方法，计算所有……”等，那么这基本上就是递归问题

[9.8.1　解题思路](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_196)

​     根据递归的定义，递归的解就是基于子问题的解构建的。通常只要在f(n-1) 的解中加入、移除某些东西或者稍作修改就能算出f(n) 。而在其他情况下，你可能要分别计算每部分的解，然后合并成最后结果。

将问题分解为子问题的方式多种多样。其中最常用的三种就是自底向上、自上而下和数据分割

​     9.8.1.1　自底向上的递归

​          自底向上的递归往往最为直观。我们从解决问题的简单情况开始，比如，列表中只有一个元素时。然后再解决有2个元素、3个元素的情况，以此类推。关键在于，如何基于 上一种情况的答案（或者前面所有情况）得出后一种情况的解。

​     9.8.1.2　自上而下的递归

​          遇到这类问题时，试着把变量为N 的情况分解成子问题的解。但要注意：分解的子问题间是否有重叠。

​          

​     9.8.1.3　数据分割的递归

​          归并排序也是一个“数据分割”的递归。我们排序数组的每一半，之后将其合并。

​          

[9.8.2　递归与迭代](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_197)

​          递归算法极其耗空间。每次递归调用都会增加一层新的方法入栈，简而言之，如果递归深度为n ，那么最少占用O(n) 的空间。

​          鉴于此，用迭代实现递归算法往往更好。所有的 递归都可以用迭代实现，只不过有时会让代码超级复杂。所以有了递归算法之后，不要急于实现。先问问自己用迭代实现难不难，也可以和面试官讨论该如何权衡。

[9.8.3　动态规划及记忆法](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_198)

​     通常来说，动态规划就是使用递归算法发现重叠子问题（也就是重复的调用）。然后你可以缓存结果以备不时之需。

除此之外，你还可以研究递归调用的模式，实现其中重复的部分。这里仍然可以“缓存”中间结果。

​     画递归调用树可以很好地用来计算递归算法运行时间。

​     自上而下的动态规划（记忆法）

​     自底向上的动态规划

[9.9　系统设计与可扩展性](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_199)

​     

[9.9.1　处理问题](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_200)

​     在面试中，你作为求职者应该起到主导作用。当然，这不是让你忽略面试官，相反地，要与面试官保持沟通。然而，你应主导问题：提出问题，讨论利弊，深入沟通，做出优化。

[9.9.2　循环渐进的设计](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_201)

​          9.9.2.1　步骤1：审题

​          9.9.2.2　步骤2：作合理假设

​          9.9.2.3　步骤3：画出主要组件

​          9.9.2.4　步骤4：确定主要问题

​          9.9.2.5　步骤5：针对主要问题重新设计

[9.9.3　逐步构建的方法：循序渐进](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_202)

​          9.9.3.1　步骤1：提出问题

​              

​          9.9.3.2　步骤2：大胆假设

​              

​          9.9.3.3　步骤3：切合实际

​              

​          9.9.3.4　步骤4：解决问题

​              

[9.9.4　关键概念](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_203)

​          9.9.4.1　水平扩展与垂直扩展

​          9.9.4.2　负载均衡

​          9.9.4.3　数据库反规范化和非关系型数据库

​          9.9.4.4　数据库分区（分片）

​          9.9.4.5　缓存

​          9.9.4.6　异步处理与队列

​          9.9.4.7　网络指标

​          9.9.4.8　MapReduce

[9.9.5　系统设计要考虑的因素](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_204)

​          故障

​          可用性与可靠性

​          读多写少与写多读少

​          安全性

[9.9.6　人无完人，系统亦然](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_205)

​          鉴于此，你的目标应该是，理解用例，仔细审题，作出合理的假设，根据假设给出一个可靠的设计，然后阐明设计的利弊。不要心存幻想，一味追求完美的系统。

[9.9.7　实例演示](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_206)

​          给定数百万份文件，如何找出所有包含某一组词的文件？这些词出现的顺序不定，但必须是完整的单词，也就是说，book与bookkeeper不能混为一谈。

​          第一步是先忘记我们有数以百万计的文件，假装只有几十个文件。在这种情况下，如何实现findWords 呢？

现在，回到最初的问题。若有数百万份文件，会有什么问题？首先，我们可能需要将文件分散到多台机器上。此外，我们还要考虑很多因素，比如要查找的单词数量，在文件中重复出现的次数等，一台机器可能放不下完整的散列表。假设我们就要按这些限制因素进行设计。

 

文件分散到多台机器上会引出以下几个很关键的问题。

 

(1) 如何划分该散列表？我们可以按关键字划分，例如，某台机器上存放包含某个单词的全部文件，或者可以按文件来划分，这样一台机器上只会存放对应某个关键字的部分文件而非全部。

 

(2) 一旦决定了如何划分数据，我们可能需要在一台机器上对文件进行处理，并将结果推送到其他机器上。这个过程会是什么样呢？（注意：若按文件划分散列表，可能就不需要这一步。）

 

(3) 我们需要找到一种方法获知哪台机器拥有哪些数据。这个查找表会是什么样的？又该存储在什么地方？

 

这只是三个主要问题，可能还会有很多其他问题。

[9.10　排序与查找](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_207)

​          掌握常见的排序与查找算法大有裨益，因为很多排序与查找问题实际上只是将大家熟悉的算法稍作修改而已。因此，处理这类问题的诀窍在于，逐一考虑各种不同的排序算法，看看哪一种较为合适。

[9.10.1　常见的排序算法](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_208)

​          归并排序（merge sort）、快速排序（quick sort）和桶排序（bucket sort）是面试中最常用的3种类型

​          9.10.1.1　冒泡排序|执行时间：平均情况与最差情况为O(n^2)，存储空间：O(1)

​          9.10.1.2　选择排序|执行时间：平均情况与最差情况为O(n^2)，存储空间：O(1)

​          9.10.1.3　归并排序|执行时间：平均情况与最差情况为O(n\log(n)) ，存储空间：看情况

​          9.10.1.4　快速排序|执行时间：平均情况为O(n\log(n))，最差情况为O(n^2)，存储空间：O(\log(n))

​          9.10.1.5　基数排序|执行时间：O(kn)

[9.10.2　查找算法](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_209)

​          除了二分查找，还有很多种查找数据结构的方法，总之，我们不要拘泥于二分查找。比如说，你可以利用二叉树或使用散列表来查找某节点。

​          

[9.11　 测试](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_210)

测试问题一般分为以下4类：(1) 测试现实生活中的事物（比如一支笔）；(2) 测试一套软件；(3) 编写代码测试一个函数；(4) 调试解决已知问题。针对每一类题型，我们都会给出相应的解法。

请记住：处理这4类问题时，切勿假设使用者会做到运用自如，而是做好应对用户误用乱用软件的准备。

[9.11.1　面试官想考查什么](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_211)

​          表面上看，测试问题主要考查你能否想到周全完备的测试用例。除此之外，面试官还想考查以下几个方面。

​          全局观

​          懂整合

​          会组织 

​          可操作

[9.11.2　测试现实生活中的事物](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_212)

​          使用者是哪些人？做什么用

​              考虑用户需求

​          有哪些用例

​              正常情况下的使用

​          有哪些使用限制

​              正常情况使用的限制

​          压力条件与失效条件是什么

​              非正常情况

​          如何执行测试

​              手动测试或自动化测试

 

[9.11.3　测试一套软件](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_213)

​          测试软件与测试现实生活的事物大同小异。主要差别在于软件测试往往更强调执行测试的细节。

请注意，软件测试主要涉及如下两个方面。

​          手动测试与自动化测试

​          黑盒测试与白盒测试

9.11.3.1　步骤1：要做黑盒测试还是白盒测试

9.11.3.2　步骤2：使用者是哪些人？做什么用

9.11.3.3　步骤3：有哪些用例

9.11.3.4　步骤4：有哪些使用限制

9.11.3.5　步骤5：压力条件和失效条件为何

9.11.3.6　步骤6：有哪些测试用例？如何执行测试

 

[9.11.4　测试一个函数](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_214)

9.11.4.1　步骤1：定义测试用例

9.11.4.2　步骤2：定义预期结果

9.11.4.3　步骤3：编写测试代码

 

[9.11.5　调试与故障排除](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_215)

9.11.5.1　步骤1：理清状况

9.11.5.2　步骤2：分解问题

​          优秀的测试人员会逐一排查每个步骤，诊断定位问题所在。

9.11.5.3　步骤3：创建特定的、可控的测试

 

[9.12　C 和 C++](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_216)

[9.12.1　类和继承](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_217)

[9.12.2　构造函数和析构函数](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_218)

[9.12.3　虚函数](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_219)

[9.12.4　虚析构函数](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_220)

[9.12.5　默认值](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_221)

[9.12.6　操作符重载](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_222)

[9.12.7　指针和引用](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_223)

[9.12.8　模板](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_224)

[9.13　Java](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_225)

[9.13.1　如何处理](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_226)

[9.13.2　重载与重写](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_227)

​     重载（overloading）是指两种方法的名称相同，但参数类型或个数不同

[9.13.3　集合框架](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_228)

​     Java的集合框架（collection framework）至关重要，本书许多章节都有所涉及。下面介绍几个最常用的。

​     ArrayList

​     Vector 

​     LinkedList 

​     HashMap 

[9.14　数据库](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_229)

​     

​     

[9.14.1　SQL语法及各类变体](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_230)

​     显式连接（explicit join）和隐式连接（implicit join）的语法显示如下。这两条语句的作用一样，至于选用哪条全看个人喜好。

 

[9.14.2　规范化数据库和反规范化数据库](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_231)

​     规范化数据库的设计目标是将冗余降到最低，反规范化数据库则是为了优化读取时间。

[9.14.3　SQL语句](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_232)

​     

[9.14.4　小型数据库设计](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_233)

​     9.14.4.1　步骤1：处理不明确之处

9.14.4.2　步骤2：定义核心对象

9.14.4.3　步骤3：分析表之间的关系

9.14.4.4　步骤4：研究该有什么操作动作

 

[9.14.5　大型数据库设计](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_234)

[9.15　线程与锁](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_235)

​     不管是什么公司，面试官常常会考查你对线程特别是对死锁的了解程度。

[9.15.1　Java线程](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_236)

​          在Java中，实现线程有以下两种方式：

通过实现java.lang.Runnable 接口；

通过扩展java.lang.Thread 类

9.15.1.1　实现Runnable接口

9.15.1.2　扩展Thread 类

9.15.1.3　扩展Thread 类与实现Runnable 接口

[9.15.2　同步和锁](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_237)

关键字synchronized 和lock 是实现代码同步的基础。

9.15.2.1　同步方法

9.15.2.2　同步块

9.15.2.3　锁

若要实现更细粒度的控制，可以使用锁（lock）。锁（或监视器）用于对共享资源的同步访问，方法是将锁与共享资源关联在一起。线程必须先取得与资源关联的锁，才能访问共享资源。在任意时间点，最多只有一个线程能拿到锁，因此，只有一个线程可以访问共享资源。

[9.15.3　死锁及死锁的预防](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_238)

​     死锁的出现必须同时满足以下4个条件。

 

(1) 互斥 ：某一时刻只有一个进程能访问某一资源。或者，更准确地说，对某一资源的访问有限制；若资源数量有限，也可能出现死锁。

 

(2) 持有并等待 ：已持有某一资源的进程不必释放当前拥有的资源，就能要求更多的资源。

 

(3) 没有抢占 ：一个进程不能强制另一个进程释放资源。

 

(4) 循环等待 ：两个或两个以上的进程形成循环链，每个进程都在等待循环链中另一进程持有的资源。

 

若要预防死锁，只需避免上述任一条件，但这很棘手，因为其中有些条件很难满足。比如，想要避免条件(1)就很困难，因为许多资源同一时刻只能被一个进程使用（如打印机）。大部分预防死锁的算法都把重心放在避免条件(4)（即循环等待）上。

[9.16　中等难题](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_239)

[9.17　高难度题](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_240)

[第 10 章　题目解法](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_241)

[10.1　数组与字符串](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_242)

[10.2　链表](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_243)

[10.3　栈与队列](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_244)

[10.4　树与图](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_245)

[10.5　位操作](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_246)

[10.6　数学与逻辑题](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_247)

[10.7　面向对象设计](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_248)

[10.8　递归与动态规划](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_249)

[10.9　系统设计与可扩展性](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_250)

[10.10　排序与查找](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_251)

[10.11　测试](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_252)

[10.12　C和C++](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_253)

[10.13　Java](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_254)

[10.14　数据库](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_255)

[10.15　线程与锁](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_256)

[10.16　中等难题](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_257)

[10.17　高难度题](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_258)

[第 11 章　进阶话题](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_259)

[11.1　实用数学](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_260)

[11.1.1　整数1至N的和](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_261)

[11.1.2　2的幂的和](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_262)

[11.1.3　对数的底](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_263)

[11.1.4　排列](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_264)

[11.1.5　组合](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_265)

[11.1.6　归纳证明](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_266)

[11.2　拓扑排序](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_267)

[11.3　Dijkstra算法](http://reader.epubee.com/books/mobile/68/68aef87e268c839b310672e61583b9af/text00000.html#nav_point_268)

 

​     

 