import React, { ChangeEvent, useState } from 'react'   
import { useCookies } from 'react-cookie';

// react-cookie 패키지:
// -react에서 쿠키를 손쉽게 관리할 수 있도록 도움을 주는 패키지
// - 쿠키 설정, 검색, 삭제를 간단한 함수로 작업할 수 있음

// 쿠키 (Cookie)
// 클라이언트가 특정한 웹 서비스에 방문하여 사용 중 해당 서비스에서 필요한 데이터를 클라이언트 브라우저에 저장하는 기술
// - 이름, 값, 만료일, 도메인, 경로가 포함됨

// npm install react-cookie << 명령어를 통해서 받아올 수 있다.
// cookie 다운받으면서 버전이 올라갈 경우 >> ' npm i -g npm '  최신버전으로 맞춰주기 위해 사용

export default function ReactCookie() {
    
    // useCookies : 리액트에서 쿠키 객체, 쿠키 변경 함수, 쿠키 제거 함수를 반환하는 배열로 반환하는 react-cookie의 훅 함수
    // 객체, 저장, 삭제 // removeCookie 라는 단어가 삭제를 하는것이 아니라 세번쨰 자리가 쿠키 제거하는 자리임
    const [cookies, setCookie, removeCookie] = useCookies();

    const [name, setName] = useState<string>('');
    const [value, setValue] = useState<string>('');
    
    const onNameChangeHanlder = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setName(value);
    }
    
    const onValueChangeHanlder = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setValue(value);
    }

    const onAddClickHandler = () => {
        // setCookie 함수를 사용하여 쿠키를 추가할 수 있음
        // 첫번째 매개변수 : 쿠키 이름
        // 두번째 매개변수 : 쿠키 값
        // 세번째 매개변수(선택) : 옵션 지정
        // setCookie(name, value);
        
        // 옵션
        // - path : 해당 쿠키가 적용될 경로
        // - expires : 만료시간
        // setCookie(name, value, {path: '/zustand'})
        const now = new Date();
        const expires = new Date(now.setSeconds(now.getSeconds()+10));
        setCookie(name, value, {path: '/', expires})

    }

    const onShowClickHandler = () => {
        // cookies 객체에 브라우저가 가지고 있는 쿠키 정보가 담겨있음
        // alert(JSON.stringify(cookies)); // JSON 형태로 쿠키를 보여줌
        // alert(cookies.first); // 첫번째 쿠키 보여줌
        // alert(cookies.second); // 두번째 쿠키를 보여줌
        alert(cookies[name]); // 쿠키를 변수로 확인 할 수 있음
        
    }

    const onRemoveClickHandler = () => {
        // removeCookie 함수를 사용하여 쿠키 제거 가능
        // 첫번째 매개변수: 쿠키 이름
        // 두번째 매개변수: 옵션
        removeCookie(name, { path: ' /zustand ' });
    }

    return(
        <div>
            <input value={name} onChange={onNameChangeHanlder} />
            <input value={value} onChange={onValueChangeHanlder}/>
            <button onClick={onAddClickHandler}>쿠키 추가</button>
            <button onClick={onShowClickHandler}>쿠키 확인</button>
            <button onClick={onRemoveClickHandler}>쿠키 제거</button>
        </div>
    )
}

