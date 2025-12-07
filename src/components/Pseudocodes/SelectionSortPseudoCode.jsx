const SelectionSortPseudocode = () => {
    return (
      <pre className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
  {`procedure selectionSort(A)
    n := length(A)
  
    for i := 0 to n-2 do
      minIndex := i
  
      for j := i+1 to n-1 do
        if A[j] < A[minIndex] then
          minIndex := j
        end if
      end for
  
      if minIndex ≠ i then
        swap(A[i], A[minIndex])
      end if
    end for
  end procedure`}
      </pre>
    );
  };
  
  export default SelectionSortPseudocode;
  