import React, { useState, useCallback } from 'react';

function SignUp() {
    const [mail, setMail] = useState('');
    const [result, setResult] = useState('');

    console.log('render');

    return (
        <div>
            <span>이메일 주소</span><br/>
            <input value={mail} onChange={(e) => setMail(e.target.value)} /><br/>
            <span>결과: {result}</span><br/>
            <button onClick={() => setResult(mail)}>회원가입</button>
        </div>
    );
}
export default SignUp;