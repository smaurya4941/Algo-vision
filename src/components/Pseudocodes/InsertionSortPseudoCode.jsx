const InsertionSortPseudocode = () => {
    return (
      <pre className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
  {`procedure insertionSort(A)
    n := length(A)
  
    for i := 1 to n-1 do
      key := A[i]
      j := i - 1
  
      while j >= 0 and A[j] > key do
        A[j + 1] := A[j]
        j := j - 1
      end while
  
      A[j + 1] := key
    end for
  end procedure`}
      </pre>
    );
  };
  
  export default InsertionSortPseudocode;
  