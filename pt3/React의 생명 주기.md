## React 생명주기

리액트의 생명주기는 크게 3가지 단계로 나눌 수 있습니다: 마운팅 (Mounting), 업데이트 (Updating), 언마운팅 (Unmounting).

⸻

✅ 1. 마운팅 (Mounting)
컴포넌트가 처음 DOM에 추가될 때 발생하는 생명주기 단계입니다.

주요 생명주기 메서드:
	1.	constructor(props)
	•	컴포넌트가 생성될 때 호출되며, 초기 상태를 설정하거나 메서드를 바인딩하는 데 사용됩니다.
	•	함수형 컴포넌트에서는 상태 초기화가 **useState**로 대신 처리됩니다.
	2.	static getDerivedStateFromProps(props, state)
	•	부모 컴포넌트가 props를 변경할 때마다 호출되며, 상태를 변경할 수 있는 메서드입니다.
	•	렌더링 전에 호출됩니다.
	3.	render()
	•	JSX를 반환하는 필수 메서드입니다. 컴포넌트의 UI를 정의합니다.
	4.	componentDidMount()
	•	컴포넌트가 DOM에 추가된 직후에 호출됩니다.
	•	주로 데이터를 가져오거나, 이벤트 리스너를 추가하는 등의 작업에 사용됩니다.
	•	함수형 컴포넌트에서는 useEffect를 사용합니다.

⸻

✅ 2. 업데이트 (Updating)

컴포넌트의 상태(state) 또는 props가 변경될 때 발생하는 생명주기 단계입니다.

주요 생명주기 메서드:
	1.	static getDerivedStateFromProps(props, state)
	•	마운팅과 동일하게 부모 컴포넌트로부터 받은 props에 따라 state를 업데이트할 수 있습니다.
	2.	shouldComponentUpdate(nextProps, nextState)
	•	성능 최적화를 위해 사용됩니다. 컴포넌트가 리렌더링될지 말지를 결정합니다.
	•	true를 반환하면 리렌더링, false를 반환하면 리렌더링을 방지합니다.
	3.	render()
	•	상태나 props에 변경이 있을 때마다 다시 호출됩니다.
	4.	getSnapshotBeforeUpdate(prevProps, prevState)
	•	렌더링 후, DOM 업데이트 직전에 호출되며, 이전 상태나 props를 기준으로 UI에 대한 스냅샷을 찍을 때 사용됩니다.
	•	반환된 값은 componentDidUpdate에서 snapshot으로 전달됩니다.
	5.	componentDidUpdate(prevProps, prevState, snapshot)
	•	컴포넌트 업데이트 후에 호출됩니다. 주로 API 호출 후 데이터를 다시 가져오는 작업에 사용됩니다.
	•	snapshot을 받을 수 있습니다.

⸻

✅ 3. 언마운팅 (Unmounting)
컴포넌트가 DOM에서 제거될 때 호출되는 생명주기 단계입니다.
주요 생명주기 메서드:
	1.	componentWillUnmount()
	•	컴포넌트가 DOM에서 제거되기 직전에 호출됩니다.
	•	주로 타이머 정리, 이벤트 리스너 제거 등의 작업에 사용됩니다.
⸻

✅ 함수형 컴포넌트와 useEffect 훅

함수형 컴포넌트에서는 useEffect 훅을 사용하여 생명주기 메서드의 역할을 대신합니다.

useEffect 훅 예시:

import React, { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  // 마운트 시 호출
  useEffect(() => {
    console.log("컴포넌트가 마운트됨");
    
    // 언마운트 시 호출되는 정리 함수
    return () => {
      console.log("컴포넌트가 언마운트됨");
    };
  }, []); // 빈 배열로 마운트 시에만 호출됨

  // 상태 변경 시 호출
  useEffect(() => {
    console.log("count 상태가 변경됨:", count);
  }, [count]); // `count`가 변경될 때마다 호출됨

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Example;
	•	useEffect(() => { ... }, []): 컴포넌트가 마운트될 때 한 번만 실행되는 효과 (생명주기 componentDidMount와 유사).
	•	useEffect(() => { ... }, [count]): count 값이 변경될 때마다 실행되는 효과 (생명주기 componentDidUpdate와 유사).
	•	return 안에서 정리 함수: 컴포넌트가 언마운트될 때 정리 작업을 수행 (생명주기 componentWillUnmount와 유사).

⸻

🎯 결론
리액트 생명주기는 컴포넌트가 생성되고, 업데이트되고, 제거되는 과정에서 특정 작업을 할 수 있게 해줍니다.
클래스 컴포넌트에서는 생명주기 메서드를 사용하고, 함수형 컴포넌트에서는 useEffect 훅을 통해 동일한 작업을 수행할 수 있습니다.
