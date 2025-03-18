### Reflow와 Repaint 일어나는 경우

1. Reflow
- DOM요소가 추가, 변경, 제거 될 떄
- CSS 스타일이 추가, 변경, 제거 될 떄
- CSS3 애니메이션, 트랜지션의 프레임에서 리플로우가 발생
- 유저의 상호작용으로 발생하는 호버, 필드에 텍스트 입력, 창 크키 조정, 글꼴 크기 변경, 스타일 시트 글꼴 전환해서 리플로우 발생
>> 부모자식에도 영향을 주기에 비용이 큼

-> 위와 같은 상황에서 수치를 재계산해 렌더트리를 재 생성하는 과정

2. Repaint
- Reflow 과정 끝난 후 재 생성된 렌더트리를 다시 그림

#### 최소화 방법
1️⃣ 리플로우 최소화하기
✔ display: none 대신 visibility: hidden 사용 (display: none은 리플로우 발생!)
✔ 여러 스타일 변경 시 CSS 클래스를 추가하는 방식 사용
✔ 애니메이션 효과는 transform, opacity 사용 (width, height 변경 X)
✔ position: absolute / fixed 사용하여 레이아웃 영향 최소화

2️⃣ 리페인트 최소화하기
✔ 색상 변경 등은 opacity와 transform을 활용
✔ 애니메이션은 GPU 가속이 가능한 will-change 사용

#### 가상돔에서의 최적화
- 가상 DOM은 생성한 DOM을 저장했다가 DOM에 변화가 있다면 메모리에 저장했던 DOM과 현재 변경된 DOM을 비교하여 변경된 부분만 실제 DOM에 반영해줌
- 결국 모든 DOM에 영향을 주지 않고 변경이 필요한 DOM만 바꿔주기에 불필요한 재렌더링을 막을 수 있다