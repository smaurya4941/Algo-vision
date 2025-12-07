const QuickSortPseudoCode = () => {
    return (
      <pre className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
  {`procedure quickSort(A, start, end)
    if start < end then
      pivotIndex := partition(A, start, end)
  
      quickSort(A, start, pivotIndex - 1)
      quickSort(A, pivotIndex + 1, end)
    end if
  end procedure
  
  
  procedure partition(A, start, end)
    pivot := A[end]
    i := start - 1
  
    for j := start to end - 1 do
      if A[j] < pivot then
        i := i + 1
        swap(A[i], A[j])
      end if
    end for
  
    swap(A[i + 1], A[end])
    return i + 1
  end procedure`}
      </pre>
    );
  };
  
  export default QuickSortPseudoCode;
  