const LinearSearchPseudoCode = () => {
    return (
      <pre className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
  {`procedure linearSearch(A, target)
    for i := 0 to length(A) - 1 do
      if A[i] = target then
        return i
      end if
    end for
    return -1
  end procedure`}
      </pre>
    );
  };
  
  export default LinearSearchPseudoCode;
  