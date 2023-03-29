import React, {useState, useRef, useCallback} from 'react';

function SignUp() {
    const mail = useRef('');
    const [result, setResult] = useState('');

    console.log('render');

    const onClick = useCallback(() => {
        setResult(mail.current.value);
        mail.current.focus();
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    return (
        <div>
            <span>이메일 주소</span><br/>
            <input ref={mail} /><br/>
            <span>결과: {result}</span><br/>
            <button onClick={onClick}>회원가입</button>
        </div>
    );
}
export default SignUp;