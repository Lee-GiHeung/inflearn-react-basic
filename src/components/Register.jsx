import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    // 모든 유저의 입력을 저장
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

    };

    return (
      <div>
        <div>
            <input 
                name="name"
                value={input.name} 
                onChange={onChange} 
                placeholder={"이름"} 
            />
        </div>

        <div>
            <input
                name="birth"
                value={input.birth} 
                type="date" 
                onChange={onChange} 
            />
        </div>

        <div>
            <select 
                name="country" 
                value={input.country} 
                onChange={onChange}
            >
                <option></option>
                <option value="KR">한국</option>
                <option value="US">미국</option>
                <option value="UK">영국</option>
            </select>
        </div>

        <div>
            <textarea 
                name="bio" 
                value={input.bio} 
                onChange={onChange} 
            />
        </div>
      </div>
    );
};

export default Register;