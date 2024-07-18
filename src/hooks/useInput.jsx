import { useState } from "react";

// 함수 앞에 use라는 키워드를 사용하면 커스텀 훅으로 판단하기 때문에
// 또 다른 react hook을 내부에서 호출하더라도 오류가 발생하지 않음
function useInput() {
    
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;