const BubbleSortPseudocode = () => {
    return (
      <pre className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
  {`procedure bubbleSort(A)
    n := length(A)
    repeat
      swapped := false
      for i := 1 to n-1 do
        if A[i-1] > A[i] then
          swap(A[i-1], A[i])
          swapped := true
        end if
      end for
      n := n - 1
    until not swapped
  end procedure`}
      </pre>
    );
  };
  
  export default BubbleSortPseudocode;
  