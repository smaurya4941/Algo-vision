const BinarySearchPseudoCode = () => {
    return (
      <pre className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
  {`procedure binarySearch(A, target)
    low := 0
    high := length(A) - 1
  
    while low ≤ high do
      mid := floor((low + high) / 2)
  
      if A[mid] = target then
        return mid
      else if A[mid] < target then
        low := mid + 1
      else
        high := mid - 1
      end if
    end while
  
    return -1
  end procedure`}
      </pre>
    );
  };
  
  export default BinarySearchPseudoCode;
  