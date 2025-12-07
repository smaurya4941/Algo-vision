const MergeSortPseudoCode = () => {
    return (
      <pre className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
  {`procedure mergeSort(A)
    if length(A) > 1 then
      mid := floor(length(A) / 2)
      left := A[0 ... mid-1]
      right := A[mid ... end]
  
      mergeSort(left)
      mergeSort(right)
  
      i := 0
      j := 0
      k := 0
  
      while i < length(left) and j < length(right) do
        if left[i] <= right[j] then
          A[k] := left[i]
          i := i + 1
        else
          A[k] := right[j]
          j := j + 1
        end if
        k := k + 1
      end while
  
      while i < length(left) do
        A[k] := left[i]
        i := i + 1
        k := k + 1
      end while
  
      while j < length(right) do
        A[k] := right[j]
        j := j + 1
        k := k + 1
      end while
    end if
  end procedure`}
      </pre>
    );
  };
  
  export default MergeSortPseudoCode;
  