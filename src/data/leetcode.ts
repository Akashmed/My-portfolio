export interface LeetCodeHighlight {
  title: string;
  url: string;
  difficulty: "Easy" | "Medium" | "Hard";
  language: string;
  description: string;
  timeComplexity: string | null;
}

export const leetcodeHighlights: LeetCodeHighlight[] = [
  {
    title: "Single Number",
    url: "https://leetcode.com/problems/single-number/submissions/1613732221",
    difficulty: "Easy",
    language: "C++",
    description:
      "Solved using bit manipulation (XOR) to achieve an efficient solution.",
    timeComplexity: "O(n)",
  },
  {
    title: "Maximum Subarray",
    url: "https://leetcode.com/problems/maximum-subarray/submissions/1616836947/",
    difficulty: "Medium",
    language: "C++",
    description:
      "Implemented Kadane's Algorithm for an optimal solution.",
    timeComplexity: "O(n)",
  },
  {
    title: "Pow(x, n)",
    url: "https://leetcode.com/problems/powx-n/submissions/1617908449/",
    difficulty: "Medium",
    language: "C++",
    description:
      "Utilized binary exponentiation to compute x raised to the power n in O(log n) time.",
    timeComplexity: "O(log n)",
  },
  {
    title: "Container With Most Water",
    url: "https://leetcode.com/problems/container-with-most-water/submissions/1620476591/",
    difficulty: "Medium",
    language: "C++",
    description:
      "Applied the two-pointer technique to find the maximum area efficiently.",
    timeComplexity: "O(n)",
  },
  {
    title: "Search in Rotated Sorted Array",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/1625549850/",
    difficulty: "Medium",
    language: "C++",
    description:
      "Modified binary search to handle rotated sorted arrays for O(log n) performance.",
    timeComplexity: "O(log n)",
  },
  {
    title: "Peak Index in a Mountain Array",
    url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/submissions/1625572673/",
    difficulty: "Medium",
    language: "C++",
    description:
      "Used binary search to efficiently find the peak index in a mountain array.",
    timeComplexity: "O(log n)",
  },
];
