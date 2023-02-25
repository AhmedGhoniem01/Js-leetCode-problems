class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        testSet = set()
        for x in nums:
            if x in testSet:
                return True
            testSet.add(x)
        return False

